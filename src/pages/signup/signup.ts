import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatListPage } from '../chat-list/chat-list';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToChatList(params){
    if (!params) params = {};
    this.navCtrl.push(ChatListPage);
  }
}
