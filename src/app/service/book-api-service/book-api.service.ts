import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/model-interface/response/api-response.model';
import { Book } from 'src/app/model/classes/book.model';
import { map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  booksFound: Observable<Book[]>;

  requestUrl : string = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  getBooksByTitle(title: string): Observable<Book[]>{
    this.booksFound = this.http.get<ApiResponse>(this.requestUrl + title + '&maxResults=10&printType=books&langRestrict=it')
    .pipe(
      map(
        response => response.items
        .map(
          item => new Book(item)
      ))
    );

    return this.booksFound;
  }

  getUpdatedBooks(): Observable<Book[]>{
    return this.booksFound;
  }
 
}
