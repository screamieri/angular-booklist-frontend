import { Component, OnInit} from '@angular/core';
import { BookApiService } from 'src/app/service/book-api-service/book-api.service';

@Component({
  selector: 'app-add-book-search',
  templateUrl: './add-book-search.component.html',
  styleUrls: ['./add-book-search.component.css']
})
export class AddBookSearchComponent implements OnInit {

  bookTitle: string;

  constructor(private bookApiService: BookApiService) { }

  ngOnInit(): void {

  }

  onChange(title: string) {
    this.bookApiService.getBooksByTitle(title)
    .subscribe(data=> {
      this.bookApiService.booksEmitted.emit(data);
    });
  }

}
