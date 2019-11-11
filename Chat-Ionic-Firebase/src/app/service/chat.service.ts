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
    
    return this.db.collection('chats').snapshotChanges().pipe(map(itens => {
      return itens.map(a =>{
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))  }

  getChat( chat_id : string){
      return this.db.collection('chats').doc(chat_id).valueChanges()
    }
  
  sendMsgToFirebase( message : Mensaje, chat_id : string){

      this.db.collection('chats').doc(chat_id).update({
        messages : firestore.FieldValue.arrayUnion(message),
      })
    }
}
