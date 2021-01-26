import { LangService } from './../../Services/lang.service';
import { Lecture } from './../../Models/Lecture.model';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'lecture-card',
  templateUrl: './lecture-card.component.html',
  styleUrls: ['./lecture-card.component.css']
})
export class LectureCardComponent implements OnInit {

  @Input("lecture") lecture: Lecture;
  @Input('mode') mode: string;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  currentLang: string;
  dateTime: string;

  constructor(
    private langS: LangService
  ) { }

  ngOnInit(): void {
    this.currentLang = this.langS.urlLang;

    if (this.lecture.coverURL)
      this.imageURL = this.lecture.coverURL

    this.dateTime = moment(this.lecture.time).format("LLL");
    console.log("DATE : ",this.dateTime);

    }


  imgUrlErr() {
    this.imageURL = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  }
}
