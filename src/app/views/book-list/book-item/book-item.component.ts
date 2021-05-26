import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iBook } from 'src/app/model/model-interface/ibook.model';
import { BookService } from 'src/app/service/book-service/book.service';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input('book')
  book : iBook;

  constructor(private  userService: UserService, private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  removeBookFromUser(){
    this.bookService.removeBookFromUser(this.book.id);
  }

  showBookDetail(){
    this.bookService.updateBookToDisplay(this.book);
    this.router.navigate(['details'], {relativeTo: this.activatedRoute});    
  }

}
