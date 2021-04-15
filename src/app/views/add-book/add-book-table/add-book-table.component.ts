import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';
import { BookService } from 'src/app/service/book-service/book.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-book-table',
  templateUrl: './add-book-table.component.html',
  styleUrls: ['./add-book-table.component.css']
})
export class AddBookTableComponent implements OnInit {

  @Input('books')
  books : Book[];
  p: number = 1;
  userId : string = '587ed148-8f1a-11eb-8dcd-0242ac130003';
  
  constructor(private bookService: BookService) {  }

  ngOnInit() {
  }

  onBookAddToLibrary(book: Book){
      this.bookService.addBookToLibrary(this.userId, book).subscribe(
        data => alert(data)
      );
  }


}
