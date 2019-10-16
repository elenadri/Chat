import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ChatService, chat } from '../servece/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( protected authservice: AuthService, public chatservice : ChatService) {}
 
  Onlogout(){
    this.authservice.logout();

  }
  public itensChat :any = [];

ngOnInit(){
this.chatservice.getChats().subscribe( chat => {
  this.itensChat = chat;
})

}

}
