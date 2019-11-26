import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";

// NAVEGAR ENTRE PAGINAS
import { Router } from "@angular/router";
import { ActionSheetController, AlertController } from '@ionic/angular';

// CAMBIAR COLOR AL STATUS BAR
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  loadingController: any;
  googlePlus: any;
  nativeStorage: any;

  constructor(private AService: AuthService, public router: Router,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private statusBar: StatusBar) { }

  async showAlertError() {
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'El usuario no existe o los datos son incorrectos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {

    // SET STATUS BAR
    this.statusBar.styleBlackTranslucent();
    this.statusBar.backgroundColorByHexString('#C8C8C8');
  }

  // FUNCION QUE HACE REFERENCIA A AUTH.SERVICES.TS
  OnClickedIniciarSesion() {
    // RESPUESTA POSITIVA REDIRIGIR A LA PAGINA HOME
    this.AService.iniciarSesion(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => {
      this.showAlertError();
    })
  }

  exitApp() {
    this.exitApp();
  }

}
