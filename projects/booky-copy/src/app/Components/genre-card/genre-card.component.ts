import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {

  @Input('genre')genre ; 
  constructor() { }

  ngOnInit(): void {
  }

}
