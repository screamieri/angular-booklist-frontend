import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  booksSubscription: Subscription;

  constructor(private bookService: BookService, private userService: UserService, private authService: AuthService) {    
  }


  ngOnInit() {

    this.booksSubscription = this.bookService.books$.subscribe(
      books => {
        this.books = books;
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
