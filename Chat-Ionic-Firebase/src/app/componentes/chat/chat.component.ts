import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Mensaje } from '../../model/mensajes';
import { User} from '../../model/user';
import { ChatService } from "../../service/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})

export class ChatComponent implements OnInit {

  public chat: any;
  public list: any;
  public mensajes = [];
  public mensaje: Mensaje;
  public room: any;
  public msg: string;
  public myDate: String = new Date().toISOString();
  public usuario: string;

  constructor(private chatservicio: ChatService,
    private navparams: NavParams,
    private modal: ModalController) { }

  ngOnInit() {
    
    //INICIAMOS NUESTRA FUNCION
    this.chat = this.navparams.get('chat');

    //INICIAMOS NUESTRA FUNCION
    this.chatservicio.getChatRoom(this.chat.id).subscribe(room => {
      this.room = room;
    });

  }

  onClickedCerrar() {
    //this.modal.ngOnDestroy();
    this.modal.dismiss();
  }

  onClickedEnviarMensaje() {
    this.mensajes.push(this.mensaje);
  }

  onClickedEnviarMensajeFirebase() {

    const mensaje: Mensaje = {
      usuario: 'this.list.name',
      contenido: this.msg,
      tipo: 'text',
      fecha: new Date().toISOString()
    }

    this.chatservicio.enviarMensajeFirebase(mensaje, this.chat.id);
    this.msg = "";
  }

}

