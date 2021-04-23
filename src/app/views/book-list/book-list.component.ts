import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/authentication-service/auth.service';
import { UserService } from 'src/app/service/user-service/user.service';
import {Book} from '../../model/classes/book.model';
import { BookService } from '../../service/book-service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  userId : string;
  books : Book[];

  constructor(private bookService: BookService, private userService: UserService, private authService: AuthService) {    
  }


  ngOnInit() {
    this.userId = this.userService.getUserId();
    this.bookService.getAllBooksByUserId(this.userId).subscribe(data => {
      this.books = data;
      console.log(data)
    });
  }

  

}
