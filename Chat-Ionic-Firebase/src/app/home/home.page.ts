import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ChatService } from '../service/chat.service';
import { ModalController, ActionSheetController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  [x: string]: any;

  public  name : string;
  public  img : string;
  public description : string;
public id :string;

  constructor( protected authservice: AuthService, public chatservice : ChatService,
                private modal : ModalController, public actionSheetController: ActionSheetController,
                ) {}

Onlogout(){
    this.authservice.logout();

  }

  public itensChat :any = [];



ngOnInit(){
this.chatservice.getChats().subscribe( chat => {
  this.itensChat = chat;
  this.chat = this.navparams.get('chat');

})

}


addChat(){
  
  this.chatservice.addChat( this.chat.id,this.name, this.description, this.img);
  
}



openChat(chats){

  this.modal.create({
    component: ChatComponent,
    componentProps : {
      chat: chats
    }
  }).then( (modal) => modal.present())
}

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Opciones',
    buttons: [{
      text: 'Desconectarse',
      role: 'destructive',
      icon: 'log-out',
      handler: () => {
        
        this.Onlogout()

      },
    }]
  });
  await actionSheet.present();
}

}
