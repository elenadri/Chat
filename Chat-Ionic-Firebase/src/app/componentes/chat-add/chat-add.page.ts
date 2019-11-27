import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChatsService } from 'src/app/servicios/chats.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat-add',
  templateUrl: './chat-add.page.html',
  styleUrls: ['./chat-add.page.scss'],
})
export class ChatAddPage implements OnInit {
  public name: string;
  public description: string;
  public id = this.afs.createId();

 
  constructor(
    private chats: ChatsService,
    private router: Router,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private afs: AngularFirestore,
    ){ }

  ngOnInit() {
  }



  onClickedRegistrar() {
    this.chats.Chatadd(this.name,this.description, this.id).then(chats => {
      this.showAlert("Registrado", "El usuario se ha creado con éxito.");
      this.router.navigate(['/home']);
      console.log(chats);
    }).catch(err => {
      this.showAlert("Chat existente!", "El Chat está registrado.");
    })
  }

  async showAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
