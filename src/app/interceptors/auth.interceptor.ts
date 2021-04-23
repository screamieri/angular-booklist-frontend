import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../service/authentication-service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private tokenRefreshInProgress: boolean = false;
  private refreshAccessTokenSubject: Subject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isApiUrl(request.url)) {
      const idToken = this.authService.getToken();

      //if the token expired and no refresh of it is currently running
      if (
        this.authService.isTokenExpired(idToken) &&
        !this.tokenRefreshInProgress
      ) {
        this.tokenRefreshInProgress = true;
        this.refreshAccessTokenSubject.next(null);
        //console.log('expired token =' + this.authService.getToken());

        return this.authService.refreshToken().pipe(
          switchMap((authResponse) => {
            console.log('token was refreshed');
            this.tokenRefreshInProgress = false;
            this.refreshAccessTokenSubject.next(authResponse.token);
            request = this.addTokenToRequest(authResponse.token, request);
            return next.handle(request);
          })
        );
      }
      //if the token expired and refresh of it is currently running
      else if (
        this.authService.isTokenExpired(idToken) &&
        this.tokenRefreshInProgress
      ) {
        return this.refreshAccessTokenSubject.pipe(
          filter((result) => result !== null),
          first(),
          switchMap((response) => {
            request = this.addTokenToRequest(idToken, request);
            return next.handle(request);
          })
        );
      } else {
        request = this.addTokenToRequest(idToken, request);
      }
    }

    return next.handle(request);
  }

  isApiUrl(url: string): boolean {
    const isApiUrl: boolean = url.includes('localhost');
    const isTokenLoginUrl: boolean = url.endsWith('/authenticate');
    const isTokenRefreshUrl: boolean = url.endsWith('/refreshtoken');
    return isApiUrl && !isTokenLoginUrl && !isTokenRefreshUrl;
  }

  addTokenToRequest(
    token: string,
    request: HttpRequest<any>
  ): HttpRequest<any> {
    const httpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${token}`
    );
    request = request.clone({ headers: httpHeaders });
    return request;
  }

  /*
  addRefreshTokenToHeader(request: HttpRequest<any>): HttpRequest<any>{
    const httpHeaders = new HttpHeaders().set("isRefreshToken",'true');
    request = request.clone({headers: httpHeaders});
    return request;
  }
*/
}
