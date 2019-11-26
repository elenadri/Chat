import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// IMPORTAMOS A FIREBASE PARA COMPROBAR QUE ESTEN AUTENTIFICADO
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';

// NAVEGAR ENTRE PAGINAS
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.AFauth.authState.pipe(map(auth => {

      // SI NO ESTA AUTENTIFICADO
      if (isNullOrUndefined(auth)) {

        // LO REDIRECCIONAMOS A POR NO ESTAR LOGUEADO
        this.router.navigate(['/login']);
        console.log(auth)
        return false;

      } else {
        // LO REDIRECCIONAMOS A POR ESTAR LOGUEADO
        console.log(auth)
        return true;
      }
    }))

  }
}
