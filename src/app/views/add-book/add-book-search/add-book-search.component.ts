import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';
import { BookApiService } from 'src/app/service/book-api-service/book-api.service';

@Component({
  selector: 'app-add-book-search',
  templateUrl: './add-book-search.component.html',
  styleUrls: ['./add-book-search.component.css']
})
export class AddBookSearchComponent implements OnInit {

  bookTitle: string;
  @Output() booksEmitted = new EventEmitter<Book[]>();

  constructor(private bookApiService: BookApiService) { }

  ngOnInit(): void {

  }

  onChange(title: string) {
    this.bookApiService.getBooksByTitle(title)
    .subscribe(data=> {
      this.booksEmitted.emit(data);
    });
  }

}
