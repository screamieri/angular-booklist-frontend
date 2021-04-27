import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book  } from '../../model/classes/book.model';
import { tap } from 'rxjs/operators';
import { iBook } from 'src/app/model/model-interface/ibook.model';
import { UserService } from '../user-service/user.service';




@Injectable({
  providedIn: 'root'
})
export class BookService {

  private requestUrl: string = 'http://localhost:8080/api/v1/user/';
  private userId: string;
  private userBooksDataSource$: BehaviorSubject<iBook[]> = new BehaviorSubject<iBook[]>(null);
  books$ = this.userBooksDataSource$.asObservable();


  constructor(private http: HttpClient, private userService: UserService) {  
    this.userId = this.userService.getUserId();
    this.getAllBooksByUser();
  }

  getAllBooksByUser(){
    return this.http.get<iBook[]>(`${this.requestUrl}${this.userId}/books/`)
    .subscribe(
      books => {
        this.userBooksDataSource$.next(books);
      }
    ); 
  }

  addBookToLibrary(book: Book){
    return this.http.put<Book>(`${this.requestUrl}${this.userId}/book/add`, book).subscribe(
      () => {
        this.getAllBooksByUser()
      });
  }

  removeBookFromUser(bookId: string){
    return this.http.delete<any>(`${this.requestUrl}${this.userId}/book/${bookId}`)
    .subscribe(
      () => {this.getAllBooksByUser()
      }
    );
  }

  
  
}
