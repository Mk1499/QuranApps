import { LangService } from './../../Services/lang.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {

  @Input('teacher') teacher;
  lang: string;

  constructor(private l: LangService) {
    console.log("T: ",this.teacher);
    
  }

  ngOnInit(): void {
    this.lang = this.l.urlLang;
  }

}
