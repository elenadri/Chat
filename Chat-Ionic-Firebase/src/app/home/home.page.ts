import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ChatService } from '../service/chat.service';
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  constructor( protected authservice: AuthService, public chatservice : ChatService,
                private modal : ModalController) {}

Onlogout(){
    this.authservice.logout();

  }

  public itensChat :any = [];



ngOnInit(){
this.chatservice.getChats().subscribe( chat => {
  this.itensChat = chat;
})

}

openChat(chats){

  this.modal.create({
    component: ChatComponent,
    componentProps : {
      chat: chats
    }
  }).then( (modal) => modal.present())
}


}
