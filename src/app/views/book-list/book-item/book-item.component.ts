import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input('book')
  book : Book;

  constructor() { }

  ngOnInit(): void {
  }

}
