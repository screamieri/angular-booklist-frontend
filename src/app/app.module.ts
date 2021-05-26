import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './views/book-list/book-list.component';
import { BookItemComponent } from './views/book-list/book-item/book-item.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './service/user-service/user.service';
import { BookService } from './service/book-service/book.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './views/add-book/add-book.component';
import { AddBookTableComponent } from './views/add-book/add-book-table/add-book-table.component';
import { AddBookSearchComponent } from './views/add-book/add-book-search/add-book-search.component';
import { BookApiService } from './service/book-api-service/book-api.service';
import { PlaceholderComponent } from './shared/placeholder/placeholder/placeholder.component';
import { LoginComponent } from './views/login/login/login.component';
import { AuthService } from './service/authentication-service/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginActivate } from './guards/loginactivate.guard';
import { BookDetailComponent } from './views/book-list/book-detail/book-detail.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatCardsComponent } from './views/user-profile/stat-cards/stat-cards.component';

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
    PlaceholderComponent,
    LoginComponent,
    BookDetailComponent,
    UserProfileComponent,
    StatCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [UserService, BookService, BookApiService, AuthService, LoginActivate,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
