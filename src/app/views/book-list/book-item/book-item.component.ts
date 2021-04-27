import { Component, Input, OnInit } from '@angular/core';
import { iBook } from 'src/app/model/model-interface/ibook.model';
import { BookService } from 'src/app/service/book-service/book.service';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input('book')
  book : iBook;

  constructor(private  userService: UserService, private bookService: BookService) { }

  ngOnInit(): void {
  }

  removeBookFromUser(){
    const userId = this.userService.getUserId();
    this.bookService.removeBookFromUser(this.book.id);
  }

}
