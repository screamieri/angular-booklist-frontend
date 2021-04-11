import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';

@Component({
  selector: 'app-add-book-table',
  templateUrl: './add-book-table.component.html',
  styleUrls: ['./add-book-table.component.css']
})
export class AddBookTableComponent implements OnInit {

  @Input('books')
  books : Book[];
  
  constructor() {  }

  ngOnInit() {
  }

}
