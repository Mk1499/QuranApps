import { BrowserModule , Title,TransferState} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {AngularFireModule} from '@angular/fire'; 
// import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { translateBrowserLoaderFactory } from './shared/loaders/translate-browser.loader';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { GraphQLModule } from './graphql.module';  
import { ShowAuthorsComponent } from './Components/show-authors/show-authors.component';
import { AuthorCardComponent } from './Components/author-card/author-card.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddAuthorComponent } from './Components/add-author/add-author.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { GenreCardComponent } from './Components/genre-card/genre-card.component';
import { ShowGenresComponent } from './Components/show-genres/show-genres.component';
import { ShowUsersComponent } from './Components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ShowBooksComponent,
    BookCardComponent,
    ShowAuthorsComponent,
    AuthorCardComponent,
    HomeComponent,
    AddAuthorComponent,
    AddBookComponent,
    GenreCardComponent,
    ShowGenresComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment?.firebaseConfig),
    // AngularFireStorageModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: translateBrowserLoaderFactory,
          deps: [HttpClient , TransferState]
      }
  })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}