import { LangService } from './../../Services/lang.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.css']
})
export class SampleCardComponent implements OnInit {

  @Input('sample') sample;
  // lang:string; 
  // currentLang:string = localStorage.getItem('lang');
  currentLang:string; 
  constructor(private langS:LangService) { }

  ngOnInit(): void {
    this.currentLang = this.langS.urlLang; 
  }

}