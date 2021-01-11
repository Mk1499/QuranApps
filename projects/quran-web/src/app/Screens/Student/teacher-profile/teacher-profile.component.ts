import { Title } from '@angular/platform-browser';
import { LangService } from '../../../Services/lang.service';
import { ApiCallService } from '../../../Services/api-call.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  teacherID: string = "";
  teacher;
  user: any = JSON.parse(localStorage.getItem('quranUser'))
  loading: boolean = false;
  enrolled: boolean = false;
  lang: string;

  constructor(private apiService: ApiCallService,
    private activeRoute: ActivatedRoute,
    private langService: LangService,
    private title:Title) { }

  ngOnInit(): void {
    this.getTeacherData();
    this.lang = this.langService.urlLang;
  }

  getTeacherData() {
    this.teacherID = this.activeRoute.snapshot.params['id'];
    this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
      this.teacher = t;
      if (this.teacher.students.includes(this.user._id)) {
        this.enrolled = true
      } else {
        this.enrolled = false
      }

      this.title.setTitle(this.teacher.name || "Teacher Profile")
    })
  }

  enroll() {
    let data = {
      studentID: this.user._id,
      teacherID: this.teacher._id
    }

    this.loading = true;
    this.apiService.studentEnroll(data).subscribe(res => {
      this.enrolled = true;
      this.loading = false;
      this.getTeacherData();

    },
      (err) => {
        this.loading = false;
        console.error("ERR ", err);

      }
    )
  }

  unEnroll() {
    let data = {
      studentID: this.user._id,
      teacherID: this.teacher._id
    }
    this.loading = true;
    this.apiService.studentUnEnroll(data).subscribe(res => {
      this.enrolled = false;
      this.loading = false;
      this.getTeacherData();
      console.log("UnEnroll RES :", res);
    },
      (err) => {
        this.loading = false;
        console.error("ERR ", err);

      }
    )
  }
}
