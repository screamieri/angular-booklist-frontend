import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<iUser>('http://localhost:8080/authenticate', { username, password }).pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )      
  }

  refreshToken(): Observable<{token: string}>{
      
      let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.getToken(),
        'isRefreshToken': 'true'
      })
      
       return this.http.get<{token: string}>('http://localhost:8080/refreshtoken', {headers: headers}).pipe(
        tap(res => this.setSession(res)),
        shareReplay()
       );
  }

  private setSession(authResult) {

    let tokenInfo = this.getDecodedAccessToken(authResult.token);   
    const expiresAt = moment(tokenInfo.exp);

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('userId', tokenInfo.userId);

  }

  getToken(): string{
    return localStorage.getItem('id_token');
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

  isTokenExpired(token: string): boolean{
    const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');
    const payload = JSON.parse(atob(encodedPayload));
    const expiryTimestamp = payload.exp;
    const currentTimestamp = Math.floor((new Date).getTime()/1000);
    return currentTimestamp >= expiryTimestamp;
  }

  isTokenExpiredEmbedded(): boolean{
    const token = this.getToken();
    const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');
    const payload = JSON.parse(atob(encodedPayload));
    const expiryTimestamp = payload.exp;
    const currentTimestamp = Math.floor((new Date).getTime()/1000);
    return currentTimestamp >= expiryTimestamp;
  }

  setAccessToken(token: string): void{
    localStorage.setItem('id_token', token);
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
