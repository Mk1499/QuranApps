import { LangService } from './../../Services/lang.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css'],
})
export class TeacherCardComponent implements OnInit {

  @Input('teacher') teacher;
  @Input('mode') mode = 'show';
  @Output('delTeacher') delTeacher = new EventEmitter<string>();
  lang: string;
  animateClass:string = "animate__fadeInLeft"



  constructor(private l: LangService) {
    console.log("T: ", this.teacher);

  }

  ngOnInit(): void {
    this.lang = this.l.urlLang;
  }

  deleteTeacher(id) {
    console.log("Deleting : ",id);

    this.animateClass = "animate__hinge";
    setTimeout(()=>{
      this.delTeacher.emit(id)
    }, 2000)
  }

}
