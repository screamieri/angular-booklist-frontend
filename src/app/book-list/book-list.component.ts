import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import { BookService } from '../service/book-service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  userId : string = '587ed148-8f1a-11eb-8dcd-0242ac130003';
  books : Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooksByUserId(this.userId).subscribe(data => this.books = data);
  }

}
