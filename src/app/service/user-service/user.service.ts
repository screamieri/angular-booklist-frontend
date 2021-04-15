import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { iUser } from 'src/app/model/model-interface/iuser.model';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //@Output() userEmitted = new EventEmitter<iUser[]>();

  requestUrl: string = 'http://localhost:8080/api/v1/user/';
  userId : string;

  constructor(private http: HttpClient) {

   }
  

  getUserId(){
    const userId = localStorage.getItem('userId');
    return userId;
  }


  getUserById(id: string): Observable<iUser>{
    return this.http.get<iUser>(this.requestUrl + 'find/id/' + id)
  }
  
  
  
}
