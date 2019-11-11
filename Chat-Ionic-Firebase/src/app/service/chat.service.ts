import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';

import { Mensaje } from '../model/mensajes';
import { Chat } from '../model/chat';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db : AngularFirestore) { }

  getChats(){
    return this.db.collection('ChatRooms').snapshotChanges().pipe(map(itens => {
      return itens.map(a =>{
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))  }


  getChat(chat_id: string) {
    return this.db.collection('ChatRooms').doc(chat_id).valueChanges();
  }
  

  getChatUsers() {
    return this.db.collection('Usuarios').snapshotChanges().pipe(map(users => {
      return users.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getChatUser(user_id: string) {
    return this.db.collection('Usuarios').doc(user_id).valueChanges();
  }

  enviarMensajeFirebase(mensaje: Mensaje, chat_id: string) {
    this.db.collection('ChatRooms').doc(chat_id).update({
      mensajes: firestore.FieldValue.arrayUnion(mensaje),
    });
  }
}
