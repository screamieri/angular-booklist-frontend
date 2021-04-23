import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';
import { BookApiService } from 'src/app/service/book-api-service/book-api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  booksToDisplay: Book[];
  placeholderMessage: string ='Inserisci il titolo o l\'autore di un libro per mostrare l\'elenco!';

  constructor(private bookApiService: BookApiService) {
    
  }

  ngOnInit() {
    this.bookApiService.apiBookDataSource$.subscribe(
      data => this.booksToDisplay = data
    )
  }
  

}
