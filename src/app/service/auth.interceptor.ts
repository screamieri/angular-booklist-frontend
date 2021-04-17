import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth-service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService){}


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let url = req.url.includes('localhost');

    const idToken = localStorage.getItem('id_token');

    if (idToken && url) {     
      
      console.log(this.authService.isLoggedIn())

     /* if (!this.authService.isLoggedIn()){
          const httpRequest = new HttpRequest(<any>req.method, 'http://localhost:8080/refresh');
          req = Object.assign(req, httpRequest);
      }
      */


      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken),
      });

      return next.handle(cloned);

    } else {
      return next.handle(req);
    }
  }
}