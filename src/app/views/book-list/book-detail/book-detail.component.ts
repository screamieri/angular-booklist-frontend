import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { iBook } from 'src/app/model/model-interface/ibook.model';
import { BookService } from 'src/app/service/book-service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookSubscription: Subscription;
  book: iBook;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {    
    this.bookSubscription = this.bookService.bookDetail$.subscribe(
      book =>{
        this.book = book;
        console.log(book)
      } 
    )
  }

  removeBook(){
    this.bookService.removeBookFromUser(this.book.id)
  }



}
