import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './views/book-list/book-list.component';
import { AddBookComponent } from './views/add-book/add-book.component';
import { LoginComponent } from './views/login/login/login.component';
import { LoginActivate } from './guards/loginactivate.guard';
import { BookDetailComponent } from './views/book-list/book-detail/book-detail.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'books', component: BookListComponent, data:{requiresLogin: true}, canActivate:[LoginActivate],
  children:[
    {path: 'add', component: AddBookComponent},
    {path: 'details', component: BookDetailComponent}
   
  ] },
  { path: 'profile', component: UserProfileComponent},
 // { path:'add', component: AddBookComponent,  data:{requiresLogin: true}, canActivate:[LoginActivate]},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }