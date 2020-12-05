import { AddAuthorComponent } from './Components/add-author/add-author.component';
import { ShowAuthorsComponent } from './Components/show-authors/show-authors.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { ShowGenresComponent } from './Components/show-genres/show-genres.component';
import { ShowUsersComponent } from './Components/show-users/show-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent , children:[
    {path:'',component:ShowBooksComponent},
    {path:'books',component:ShowBooksComponent},
    {path:'authors',component:ShowAuthorsComponent},
    {path:'genres',component:ShowGenresComponent},
    {path:'users',component:ShowUsersComponent},

    {path:'addAuthor',component:AddAuthorComponent}, 
    {path:'addBook',component:AddBookComponent}, 


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
