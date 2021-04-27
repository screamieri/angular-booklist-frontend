import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';
import { BookService } from 'src/app/service/book-service/book.service';
import * as moment from 'moment';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-add-book-table',
  templateUrl: './add-book-table.component.html',
  styleUrls: ['./add-book-table.component.css']
})
export class AddBookTableComponent implements OnInit {

  @Input('books')
  books : Book[];
  p: number = 1;
  userId : string;
  
  constructor(private bookService: BookService, private userService: UserService) {  }

  ngOnInit() {
    this.userId = this.userService.getUserId();    
  }

  onBookAddToLibrary(book: Book){
      this.bookService.addBookToLibrary(book);
  }


}
