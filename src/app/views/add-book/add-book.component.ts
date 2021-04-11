import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  booksToDisplay: Book[];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayBooks(booksList: Book[]){
    this.booksToDisplay = booksList;  
  }
  

}
