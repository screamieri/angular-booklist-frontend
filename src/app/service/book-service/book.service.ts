import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book  } from '../../model/book.model';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  requestUrl: string = 'http://localhost:8080/api/v1/user/';

  constructor(private http: HttpClient) {   }

  getAllBooksByUserId(id : string): Observable<Book[]>{
    return this.http.get<Book[]>(this.requestUrl + id + "/books/");
  }
  
}
