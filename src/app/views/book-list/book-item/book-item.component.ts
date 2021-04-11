import { Component, Input, OnInit } from '@angular/core';
import { iBook } from 'src/app/model/model-interface/ibook.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input('book')
  book : iBook;

  constructor() { }

  ngOnInit(): void {
  }

}
