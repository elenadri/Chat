import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { ChatService } from 'src/app/service/chat.service';

import { Mensaje} from '../../model/mensajes';
import { User } from '../../model/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chat: any;

  public list: any;

  public mensajes = [];

  public mensaje: Mensaje;

  public room: any;

  public msg: string;

  public myDate: String = new Date().toISOString();

  public usuario: string;

  constructor(
    private navparams: NavParams, 
    private modal: ModalController,
    private chatService : ChatService) { }

  ngOnInit() {

     this.chat = this.navparams.get('chat');

     this.chatService.getChat(this.chat.id).subscribe(room => {
       this.room = room;
     });
  }

  
  

}