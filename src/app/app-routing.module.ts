import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './views/book-list/book-list.component';
import { AddBookComponent } from './views/add-book/add-book.component';
import { LoginComponent } from './views/login/login/login.component';
import { LoginActivate } from './guards/loginactivate.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'books', component: BookListComponent, data:{requiresLogin: true}, canActivate:[LoginActivate]},
  { path:'add', component: AddBookComponent, data:{requiresLogin: true}, canActivate:[LoginActivate]},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }