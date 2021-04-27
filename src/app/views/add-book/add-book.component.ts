import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/model/classes/book.model';
import { BookApiService } from 'src/app/service/book-api-service/book-api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {

  booksToDisplay: Book[];
  placeholderMessage: string ='Inserisci il titolo o l\'autore di un libro per mostrare l\'elenco!';
  apiBookSubscription: Subscription;

  constructor(private bookApiService: BookApiService) {
    
  }

  ngOnInit() {
    this.apiBookSubscription = this.bookApiService.apiBooks$.subscribe(
      apiBooks => this.booksToDisplay = apiBooks
    )
  }

  ngOnDestroy(){
    this.apiBookSubscription.unsubscribe();
  }
  

}
