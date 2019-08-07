import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatListPage } from '../chat-list/chat-list';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToChatList(params){
    if (!params) params = {};
    this.navCtrl.push(ChatListPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
