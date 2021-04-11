import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './views/book-list/book-list.component';
import { AddBookComponent } from './views/add-book/add-book.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path:'add', component: AddBookComponent},
  { path: '', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }