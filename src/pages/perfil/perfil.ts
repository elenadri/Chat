import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatListPage } from '../chat-list/chat-list';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AyudaPage } from '../ayuda/ayuda';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToChatList(params){
    if (!params) params = {};
    this.navCtrl.push(ChatListPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToAyuda(params){
    if (!params) params = {};
    this.navCtrl.push(AyudaPage);
  }
}
