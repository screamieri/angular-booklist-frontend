import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/classes/book.model';
import { CommonModule } from '@angular/common'; 
import { BookApiService } from 'src/app/service/book-api-service/book-api.service';

@Component({
  selector: 'app-add-book-table',
  templateUrl: './add-book-table.component.html',
  styleUrls: ['./add-book-table.component.css']
})
export class AddBookTableComponent implements OnInit {

  @Input('books')
  books : Book[];
  
  constructor(private bookApiService: BookApiService) {  }

  ngOnInit() {
  }

}
