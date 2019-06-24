const express = require('express');
const app = express();
const path = require("path");

var socketIO = require('socket.io');
var io = socketIO();
var chatSocketService = require('./services/chatSocketService')(io);

var http = require('http');

const restRouter = require("./routes/rest.js");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://yangya:yangya@cluster0-behmn.azure.mongodb.net/tests");

app.use('/api/v1', restRouter);


app.use(express.static(path.join(__dirname, '../public')));

// app.listen(8080, () => {
//     console.log('App is listing to port 8080');
// });

const server = http.createServer(app);
io.attach(server);
server.listen(8080);
server.on('listening', () => {
    console.log('App is listing to port 8080');
});

app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});