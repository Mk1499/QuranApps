import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { getAuthors } from '../../Queries/getAuthors.query';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-show-authors',
  templateUrl: './show-authors.component.html',
  styleUrls: ['./show-authors.component.css']
})
export class ShowAuthorsComponent implements OnInit {

  authors:any[] = [] ; 
  loading: boolean = true;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo , private titleService:Title) { }

  ngOnInit(): void {
   
    // this.titleService.setTitle("Authors")
    
    this.querySubscription = this.apollo.watchQuery<any>({
      query: getAuthors
    }).valueChanges.subscribe(({data,loading})=>{
      this.loading = loading; 
      this.authors = data?.authors; 
      // console.log("Authors loaded : ",data.authors);
      
    })

  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
