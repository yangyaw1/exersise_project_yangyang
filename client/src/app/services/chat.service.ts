import { Injectable } from '@angular/core';

declare var io: any;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatSocket: any;
  constructor() { }
  
  init(userId: {value: string}, usernumber: {value: number}, chatbody: {body: string}, testId: string): void{
    this.chatSocket = io(window.location.origin, {query: 'testId='+testId});
    
    this.chatSocket.on("message", message => {
      console.log("message received from the server: " + message);
    })
    
    this.chatSocket.on("userchange", (users, id) => {
      console.log("get users " + String(usernumber.value));
       usernumber.value = users;
       if(userId.value == ''){
         userId.value = String(id);
       }
    })
    
    this.chatSocket.on("newchat", (newchat) => {
      console.log("get chat " + newchat);
       if(chatbody.body != ''){
         chatbody.body += '\n';
       }
       chatbody.body += newchat;
    })
  }  
  
  sendchat(newchat: string): void{
    this.chatSocket.emit("newchat", newchat);
  }
  
  newuser(): void {
    this.chatSocket.emit("newuser");
  }
}
