import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';
import { ApiResponse } from 'src/app/model/model-interface/response/api-response.model';
import { Item } from 'src/app/model/model-interface/response/item.model';
import { BookApiService } from 'src/app/service/book-api-service/book-api.service';

@Component({
  selector: 'app-add-book-search',
  templateUrl: './add-book-search.component.html',
  styleUrls: ['./add-book-search.component.css']
})
export class AddBookSearchComponent implements OnInit {

  bookTitle: string;
  booksFound: Item[];
  @Output() booksEmitted = new EventEmitter<Book[]>();

  constructor(private bookApiService: BookApiService) { }

  ngOnInit(): void {

  }

  onChange(title: string) {
    this.bookApiService.getBooksByTitle(title)
      .subscribe(response => {
        this.booksFound = response;   
        this.onBooksFound(this.booksFound);
      });   

  }

  onBooksFound(items: Item[]){
    let books: Book[] = [];

    for(let item of items){
      books.push(new Book(item));
    }

    this.booksEmitted.emit(books); 
  }

}
