import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { iBook } from 'src/app/model/model-interface/ibook.model';
import { AuthService } from 'src/app/service/authentication-service/auth.service';
import { UserService } from 'src/app/service/user-service/user.service';
import {Book} from '../../model/classes/book.model';
import { BookService } from '../../service/book-service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  userId : string;
  books : Book[];
  //books$: Observable<Book[]>;
  booksSubscription: Subscription;

  constructor(private bookService: BookService, private userService: UserService, private authService: AuthService) {    
  }


  ngOnInit() {
    //this.books$ = this.bookService.books$;    
    
    this.booksSubscription = this.bookService.books$.subscribe(
      books => {
        this.books = books;
        if(this.books != null){
          this.bookService.updateBookToDisplay(this.books[0] as iBook)
        }
        
      }
    )
    
    
    /*this.userId = this.userService.getUserId();

    this.bookService.userBooksDataSource$.subscribe(data => {
      this.books = data
    });
    
    this.bookService.getAllBooksByUserId().subscribe();
    */
        
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
