import { LangService } from './../../Services/lang.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input('student') student;
  @Input('mode') mode = 'show';
  @Output('delStudent') delStudent = new EventEmitter<string>();
  lang: string;
  animateClass: string = "animate__fadeInLeft"



  constructor(private l: LangService) {

  }

  ngOnInit(): void {
    console.log("T: ", this.student);
    this.lang = this.l.urlLang;
  }

  deleteStudent(id) {
    console.log("Deleting : ", id);
    this.animateClass = "animate__hinge";
    setTimeout(() => {
      this.delStudent.emit(id)
    }, 2000)
  }

}
