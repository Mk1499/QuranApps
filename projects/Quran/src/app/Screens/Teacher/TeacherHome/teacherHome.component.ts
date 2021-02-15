import { Title } from '@angular/platform-browser';
import { TeacherService } from '../../../Services/teacher.service';
import { Component, OnInit } from "@angular/core";
import { Teacher } from '../../../Models/teacher';

@Component({
  selector: 'teacher-home',
  templateUrl: './teacherHome.component.html',
  styleUrls: ["teacherHome.components.css"]
})

export class TeacherHomeComponent implements OnInit {

  teacherData: Teacher;
  constructor(
    private teacher: TeacherService,
    private title: Title
  ) {

  }

  ngOnInit() {
    this.teacherData = JSON.parse(localStorage.getItem('quranTeacher'));
    console.log("Teacher Data : ", this.teacherData);
    this.title.setTitle(this.teacherData.name)

  }
}
