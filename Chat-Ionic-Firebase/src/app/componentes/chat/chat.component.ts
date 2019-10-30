import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { ChatService } from 'src/app/service/chat.service';

export interface mensaje {
  content : string
  type : string
  date : Date
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chat: any;

  public mensajes = []; //messages

  public room: any;

  public msg : string;
  constructor(
    private navparams: NavParams, 
    private modal: ModalController,
    private chatService : ChatService) { }

  ngOnInit() {

    this.chatService.getChat( this.chat.id).subscribe( room => {
      console.log(room);
      this.room = room;
    })

    this.chat = this.navparams.get('chat')
  }

  closeChat() {
    this.modal.dismiss()
  }

  sendMessage(){

    const mensaje : mensaje = {
    content : this.msg,
    type : 'text',
    date : new Date()
    }
    
  this.chatService.sendMsgToFirebase( mensaje, this.chat.id);
  this.msg = "";
  }

  

}