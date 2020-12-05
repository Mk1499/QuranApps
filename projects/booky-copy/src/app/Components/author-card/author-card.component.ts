import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {

  @Input('author') author: any;
  constructor() { }

  ngOnInit(): void {
  }

}
