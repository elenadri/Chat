import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


export interface chat {
  descripcion : string
  name : string
  id: string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db : AngularFirestore) { }

  getChats(){
    
    return this.db.collection('chats').snapshotChanges().pipe(map(itens => {
      return itens.map(a =>{
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))  }


  
}
