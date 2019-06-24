var redisClient = require('../modules/redisClient');
const TIMENOUT_IN_SECONDS = 3600;


module.exports = function(io){
    // chat sessions
    var chats = {};
    // map from socket Id to test Id
    var socketIdToTestId = {};
    // assign userid to socketid based on count
    var countid = {};
    var socketidTouserid = {};
    // manage session
    var sessionPath = '/temp_sessions/';
    io.on('connection', (socket)=> {
        
       io.to(socket.id).emit('message', 'Hi from server');
       
       //map socketid to testid
       var testId = socket.handshake.query['testId'];
       socketIdToTestId[socket.id] = testId;
       
       // add socketid to session
    //   if (!(testId in chats)){
    //       chats[testId] = {'participants': []};
    //       countid[testId] = 0;
    //       socketidTouserid[testId] = {};
    //   } 
      if (testId in chats){
          chats[testId]['participants'].push(socket.id);
          if (!(socket.id in socketidTouserid[testId])) {
              countid[testId] ++;
              socketidTouserid[testId][socket.id] = countid[testId];
          }
      } else {
          redisClient.get(sessionPath + testId, function(data){
              if (data) {
                  let infor = JSON.parse(data);
                  console.log('session terminated previously, pulling back from redis');
                  console.log(infor);
                  chats[testId] = {
                      'participants': [],
                      'cachedmessages': infor[0]
                  };
                  chats[testId]['participants'].push(socket.id);
                  countid[testId] = infor[1] + 1;
                  socketidTouserid[testId] = {};
                  socketidTouserid[testId][socket.id] = countid[testId];
              } else {
                  console.log('creating new session');
                  chats[testId] = {
                      'participants': [],
                      'cachedmessages': ''
                  };
                  chats[testId]['participants'].push(socket.id);
                  countid[testId] = 1;
                  socketidTouserid[testId] = {};
                  socketidTouserid[testId][socket.id] = 1;
              }
          });
      }
       
       
       // response to newuser event
       socket.on('newuser', () =>{
           let testId = socketIdToTestId[socket.id];
           console.log('new user at test: ' + testId);
           if(testId in chats){
              let userid = socketidTouserid[testId][socket.id];
              let participants = chats[testId]['participants'];
              let usernumber = Number(participants.length);
              let newmessage = 'New user (id: ' + userid +') join this test!';
              if (!(chats[testId]['cachedmessages'] === '')){
                  chats[testId]['cachedmessages'] += '\n';
              }
              chats[testId]['cachedmessages'] += newmessage;
              console.log(usernumber);
              for(let i = 0; i < participants.length; i++){
                  io.to(participants[i]).emit('userchange', usernumber, userid);
                  if(participants[i] === socket.id){
                     io.to(participants[i]).emit('newchat', chats[testId]['cachedmessages']);
                  } else {
                     io.to(participants[i]).emit('newchat', newmessage);
                  }
              }
           } else {
               console.log('no chats found!');
           }
       });
       
       // response to newchat event
       socket.on('newchat', (newchat)=>{
           let testId = socketIdToTestId[socket.id];
           console.log('newchat: ' + newchat);
           if (!(chats[testId]['cachedmessages'] === '')){
                  chats[testId]['cachedmessages'] += '\n';
              }
           chats[testId]['cachedmessages'] += newchat;
           if(testId in chats){
              let participants = chats[testId]['participants']; 
              for(let i = 0; i < participants.length; i++){
                  io.to(participants[i]).emit('newchat', newchat);
              }
           } else {
               console.log('no chats found');
           }
       });
       
       // response to disconnect event
       socket.on('disconnect', ()=>{
          let testId = socketIdToTestId[socket.id];
              if(testId in chats){
                  let userid = socketidTouserid[testId][socket.id];
                  let participants = chats[testId]['participants'];
                  let index = participants.indexOf(socket.id);
                  if(index >= 0) {
                     let newmessage = 'user (id: ' + userid +') left this test!';
                     if (!(chats[testId]['cachedmessages'] === '')){
                        chats[testId]['cachedmessages'] += '\n';
                     }
                     chats[testId]['cachedmessages'] += newmessage;
                     participants.splice(index, 1);
                     if(participants.length > 0){
                         let usernumber = Number(participants.length);
                         for(let i = 0; i < participants.length; i++){
                            io.to(participants[i]).emit('newchat', newmessage);
                            io.to(participants[i]).emit('userchange', usernumber, userid);
                         }
                     } else {
                         console.log('Last user left, save to redis.');
                         let key = sessionPath + testId;
                         let value = JSON.stringify([chats[testId]['cachedmessages'], countid[testId], socketidTouserid[testId]]);
                         redisClient.set(key, value, redisClient.redisPrint);
                         redisClient.expire(key, TIMENOUT_IN_SECONDS);
                         delete chats[testId];
                         delete countid[testId];
                         delete socketidTouserid[testId];
                     }
                  } else {
                     console.log('cannot find socketid!');
                  }
              } else {
                  console.log('cannot find test information!');
              }
       });
    });
};