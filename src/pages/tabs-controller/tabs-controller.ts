import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatListPage } from '../chat-list/chat-list';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AyudaPage } from '../ayuda/ayuda';
import { ChatListPage } from '../chat-list/chat-list';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChatListPage;
  tab2Root: any = PerfilPage;
  constructor(public navCtrl: NavController) {
  }
  goToChatList(params){
    if (!params) params = {};
    this.navCtrl.push(ChatListPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
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
