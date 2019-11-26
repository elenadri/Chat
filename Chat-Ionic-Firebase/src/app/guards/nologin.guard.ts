import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class NologinGuard implements CanActivate {
  constructor(private AFauth: AngularFireAuth, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.AFauth.authState.pipe(map(auth => {

      // SI NO ESTA AUTENTIFICADO
      if (isNullOrUndefined(auth)) {
        
        console.log(auth);
        return true;

      } else {

        console.log(auth);
        // LO REDIRECCIONAMOS A
        this.router.navigate(['/home']);
        return false;

      }
    }))

  }
}
