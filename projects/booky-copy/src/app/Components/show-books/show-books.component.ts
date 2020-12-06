import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { getBooks } from '../../Queries/getBooks.query';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  loading: boolean = true;
  books: any[] = [];
  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private titleService: Title, private tr: TranslateService) { }

  ngOnInit(): void {
    // this.tr.get("books").subscribe(res => {
    //   this.titleService.setTitle(res);
    // })
    this.querySubscription = this.apollo.watchQuery<any>({
      query: getBooks
    }).valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.books = data?.books;
      // console.log("Data loaded : ", data.books);

    })
  }

}
