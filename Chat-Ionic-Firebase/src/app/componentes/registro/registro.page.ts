import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  public name: string;
  public email: string;
  public password1: string;
  public password2: string;

  constructor(private auth: AuthService, private router: Router,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  onClickedVerificarPass() {
    if (this.name != null && this.email != null && this.password1 != null && this.password2 != null) {
      if (this.password1 === this.password2) {
        if (this.password1.length >= 6) {
          this.onClickedRegistrar();
        } else {
          this.showAlert("¡Error!", "La contrseña debe tener por lo menos 6 carácteres.");
        }
      } else {
        this.showAlert("¡Error!", "Las constraseñas son distintas.");
      }
    } else {
      this.showAlert("¡Error!", "Ingresa los campos faltantes.");
    }

  }

  onClickedRegistrar() {
    this.auth.registrarUsuario(this.name, this.email, this.password1).then(auth => {
      this.showAlert("Registrado", "El usuario se ha creado con éxito.");
      this.router.navigate(['/home']);
      console.log(auth);
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
