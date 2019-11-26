import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router,
    private db: AngularFirestore) { }

  // FUNCION PARA HACER LOGIN A FIREBASE
  iniciarSesion(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });

  }

  // FUNCION PARA CERRAR LA SESION
  salir() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  registrarUsuario(name: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        // ALMACENOS LOS USUARIOS EN LA BD
        const uid = res.user.uid;
        const email = res.user.email;
        this.db.collection('Usuarios').doc(res.user.uid).set({
          userid: uid,
          name: name,
          email: email,
        })

        resolve(res);
      }).catch(err => reject(err));
    })
  }

}
