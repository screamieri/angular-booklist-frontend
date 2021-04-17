import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from 'src/app/model/model-interface/iuser.model';
import { shareReplay, tap  } from 'rxjs/operators';
import * as moment from 'moment';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<iUser>('http://localhost:8080/authenticate', { username, password }).pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )      
  }

  refrershToken(){
    return this.http.post<iUser>('http://localhost:8080/refresh', {responseType: 'text' as 'json'}).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    )
  }

  private setSession(authResult) {

    let tokenInfo = this.getDecodedAccessToken(authResult.token);    
    //const expiresAt = moment().add(authResult.expires_at, 'second');
    //console.log(tokenInfo.exp);
    //const expiresAt = moment().add(tokenInfo.exp, 'second');
    //console.log(JSON.stringify(expiresAt.valueOf()));
    const expiresAt = moment(tokenInfo.exp);

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('userId', tokenInfo.userId);

  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userId');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment.unix(expiresAt);
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
