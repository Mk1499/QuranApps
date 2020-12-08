import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {

  @Input('teacher') teacher;

  constructor() { }

  ngOnInit(): void {
  }

}
