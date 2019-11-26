import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChatsService } from 'src/app/servicios/chats.service';

@Component({
  selector: 'app-chat-add',
  templateUrl: './chat-add.page.html',
  styleUrls: ['./chat-add.page.scss'],
})
export class ChatAddPage implements OnInit {
  public name: string;
  public description: string;
  public img: string;
  public id: string;
  attachment: File = null;

  constructor(
    private chats: ChatsService,
    private router: Router,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
    ){ }

  ngOnInit() {
  }


  attachFile(e){
    if (e.target.files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = e.target.files[0];
    console.log(file);
    this.attachment = file;
  }


  onClickedRegistrar() {
    this.chats.Chatadd(this.name,this.description, this.img, this.id).then(chats => {
      this.showAlert("Registrado", "El usuario se ha creado con éxito.");
      this.router.navigate(['/home']);
      console.log(chats);
    }).catch(err => {
      this.showAlert("¡Usuario existente!", "El correo está registrado.");
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
