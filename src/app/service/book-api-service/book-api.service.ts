import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/model-interface/response/api-response.model';
import { Book } from 'src/app/model/classes/book.model';
import { Item } from 'src/app/model/model-interface/response/item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  booksFound: Book[];

  requestUrl : string = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  getBooksByTitle(title: string): Observable<Item[]>{
    return this.http.get<ApiResponse>(this.requestUrl + title + '&maxResults=10&printType=books&langRestrict=it')
    .pipe(
      map(response => response.items)
    );
  }
 
}
