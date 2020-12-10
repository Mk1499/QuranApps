import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.css']
})
export class SampleCardComponent implements OnInit {

  @Input('sample') sample;
  currentLang:string = localStorage.getItem('lang');
  constructor() { }

  ngOnInit(): void {
  }

}
