import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iBook  } from '../../model/model-interface/ibook.model';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  requestUrl: string = 'http://localhost:8080/api/v1/user/';

  constructor(private http: HttpClient) {   }

  getAllBooksByUserId(id : string): Observable<iBook[]>{
    return this.http.get<iBook[]>(this.requestUrl + id + "/books/");
  }
  
}
