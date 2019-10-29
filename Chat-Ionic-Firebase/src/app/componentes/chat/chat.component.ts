import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chat: any;
  // public message : message;

  public messages = [];

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


  

}