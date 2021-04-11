import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './views/book-list/book-list.component';
import { BookItemComponent } from './views/book-list/book-item/book-item.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './service/user-service/user.service';
import { BookService } from './service/book-service/book.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './views/add-book/add-book.component';
import { AddBookTableComponent } from './views/add-book/add-book-table/add-book-table.component';
import { AddBookSearchComponent } from './views/add-book/add-book-search/add-book-search.component';
import { BookApiService } from './service/book-api-service/book-api.service';
import { PlaceholderComponent } from './shared/placeholder/placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookListComponent,
    BookItemComponent,
    FooterComponent,  
    AddBookComponent,
    AddBookSearchComponent,
    AddBookTableComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [UserService, BookService, BookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
