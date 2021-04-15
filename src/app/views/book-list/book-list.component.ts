import { Component, OnInit } from '@angular/core';
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

  constructor(private bookService: BookService, private userService: UserService) {    
  }


  ngOnInit() {
    this.userId = this.userService.getUserId();
    this.bookService.getAllBooksByUserId(this.userId).subscribe(data => this.books = data);   
  }

  

}
