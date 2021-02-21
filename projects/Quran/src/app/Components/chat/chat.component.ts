import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../../Models/Message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  messages: Message[] = [];
  activeMsg: string;
  @Input('newMsg') newMsg: Message;
  @Output("sendMsg") sendMsg = new EventEmitter<Message>()

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    let msg: Message = {
      source: "You",
      content: this.activeMsg
    }
    if (this.activeMsg) {
      console.log("add msg : ",msg,this.messages);

      this.messages.push(msg);
      this.sendMsg.emit(msg);
    }
    this.activeMsg = "";
  }

  ngOnChanges(changes) {
    console.log("Chat Changed : ",changes);
    if (changes.newMsg.currentValue)
    this.messages.push(changes.newMsg.currentValue)
  }

}
