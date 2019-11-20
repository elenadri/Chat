import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';

// IMPORTAMOS LOS model
import { Mensaje } from '../model/mensajes';
import { Chat } from '../model/chat';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFirestore) { }

  // VARIOS DOCUMENTOS
  getChatRooms() {
    return this.db.collection('ChatRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  // VARIOS DOCUMENTOS
  getChatUsers() {
    return this.db.collection('Usuarios').snapshotChanges().pipe(map(users => {
      return users.map(a => {
        const data = a.payload.doc.data() as User;
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

  enviarMensajeFirebase(mensaje: Mensaje, chat_id: string) {
    this.db.collection('ChatRooms').doc(chat_id).update({
      // 'MENSAJES' ES EL AREGLO QUE SE CREA EN FIREBASE
      mensajes: firestore.FieldValue.arrayUnion(mensaje),
    });
  }

}
