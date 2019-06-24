import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  
  chatbody: {body: string} = {body: ''};
  chatmessage: string = '';
  usernumber: {value: number} = {value: 0};
  userId: {value: string} = {value: ''};
  testId: string;
  
  constructor(private route: ActivatedRoute,
    private chatservice: ChatService) { }

  ngOnInit() {
    this.route.params
     .subscribe(params => {
       this.testId = params['id'];
     });
     
    this.chatservice.init(this.userId, this.usernumber, this.chatbody, this.testId);
    this.chatservice.newuser();
  }
  
  sendmessage() {
    this.chatservice.sendchat('Anonymous (id: ' + this.userId.value + '): ' + this.chatmessage);
    this.chatmessage = '';
  }
  
  resetmessage() {
    if(this.chatmessage == '\n'){
       this.chatmessage = '';
    }
  }

}
