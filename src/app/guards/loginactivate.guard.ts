import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/authentication-service/auth.service';

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let idToken: string = this.authService.getToken();

    if (idToken && this.authService.isTokenExpired(idToken)) {
      console.log(1)
      //console.log('il token esiste ma è scaduto');

      this.authService.refreshToken().subscribe(() => {
        //console.log('il token è stato aggiornato')
        return true;
      });
    } else if (idToken && !this.authService.isTokenExpired(idToken)) {
      console.log(2)
      return true;
    } else {
      console.log(3)
      this.router.navigate(['login']);
    }

    return true;
  }
}
