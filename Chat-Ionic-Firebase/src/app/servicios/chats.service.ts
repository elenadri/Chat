import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map, subscribeOn } from 'rxjs/operators';
import { firestore } from 'firebase';

// IMPORTAMOS LOS MODELOS
import { MENSAJE } from '../modelos/mensajes';
import { CHAT } from '../modelos/chat';
import { USER } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db: AngularFirestore) { }

  // VARIOS DOCUMENTOS
  getChatRooms() {
    return this.db.collection('ChatRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as CHAT;
         data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  // VARIOS DOCUMENTOS
  getChatUsers() {
    return this.db.collection('Usuarios').snapshotChanges().pipe(map(users => {
      return users.map(a => {
        const data = a.payload.doc.data() as USER;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data;
      });
    }));
  }

  // UN SOLO DOCUMENTO
  getChatRoom(chat_id: string) {
    return this.db.collection('ChatRooms').doc(chat_id).valueChanges();
  }

  // UN SOLO DOCUMENTO
  getChatUser(user_id: string) {
    return this.db.collection('Usuarios').doc(user_id).valueChanges();
  }

// ADD CHAT
Chatadd(name:string,description: string,id: string) {
    return this.db.collection('ChatRooms').doc(id).set({
      description: description,
      name: name
    });
  }

  enviarMensajeFirebase(mensaje: MENSAJE, chat_id: string) {
    this.db.collection('ChatRooms').doc(chat_id).update({
      // 'MENSAJES' ES EL AREGLO QUE SE CREA EN FIREBASE
      mensajes: firestore.FieldValue.arrayUnion(mensaje),
    });
  }

}
