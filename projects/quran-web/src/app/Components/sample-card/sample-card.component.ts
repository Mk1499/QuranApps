import { Sample } from './../../Models/Sample.model';
import { SampleService } from './../../Services/sample.service';
import { LangService } from './../../Services/lang.service';
import { Component, Input, OnInit } from '@angular/core';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.css']
})
export class SampleCardComponent implements OnInit {

  @Input('sample') sample:Sample;
  imageURL:string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  // lang:string;
  // currentLang:string = localStorage.getItem('lang');
  currentLang:string;
  constructor(private langS:LangService ,private sampleSer:SampleService) { }

  ngOnInit(): void {
    this.currentLang = this.langS.urlLang;
    if (this.sample.avatar){
      this.imageURL = this.sample.avatar;
    }
  }

  playSample(){
    this.sampleSer.changeActiveSample.next(this.sample)
  }

  imgUrlErr(){
    this.imageURL = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  }

}
