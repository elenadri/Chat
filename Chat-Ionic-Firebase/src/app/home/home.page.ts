import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService } from "../servicios/chats.service";
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';

import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  [x: string]: any;
  public chatRooms: any = [];
  public users: any = [];

  constructor(private AService: AuthService,
    public chatservice: ChatsService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private statusBar: StatusBar) { }


  ngOnInit() {

    this.statusBar.styleBlackTranslucent();
    this.statusBar.backgroundColorByHexString('#075E54');
    this.chatservice.getChatRooms().subscribe(
      chats => {
        this.chatRooms = chats;
      }
    );

    this.chatservice.getChatUsers().subscribe(
      users => {
        this.users = users;
        console.log(this.users);
      }
    );

  }

  OnClickedSalir() {
    this.AService.salir();
  }

  onClickedOpenChat(chat) {

    this.modal.create(
      {
        component: ChatComponent,
        componentProps: {
          chat: chat
        }
      }
    ).then(modal => modal.present())
  }

  async showAlertCerrar() {
    const alert = await this.alertController.create({
      header: '¡Alerta!',
      message: 'Se ha cerrado sesión con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [

        {
          text: 'Cerrar sesión',
          icon: 'log-out',
          role: 'destructive',

          handler: () => {
            this.OnClickedSalir();
            this.showAlertCerrar();
          }
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }

      ]

    });
    await actionSheet.present();
  }

  

}
