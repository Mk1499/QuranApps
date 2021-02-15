import { RouteData } from '../../../Models/RouteData.model';
import { DynamicMeta } from '../../../Services/dynamicMeta.service';
import { Title } from '@angular/platform-browser';
import { LangService } from '../../../Services/lang.service';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../../../Services/api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-teacher-profile',
  templateUrl: './admin-teacher-profile.component.html',
  styleUrls: ['./admin-teacher-profile.component.css']
})
export class AdminTeacherProfileComponent implements OnInit {
  teacherID: string = "";
  teacher;
  user: any = JSON.parse(localStorage.getItem('quranUser'))
  loading: boolean = false;
  enrolled: boolean = false;
  lang: string;

  constructor(private apiService: ApiCallService,
    private activeRoute: ActivatedRoute,
    private langService: LangService,
    private title: Title,
    private metaService: DynamicMeta
  ) { }

  ngOnInit(): void {
    this.getTeacherData();
    this.lang = this.langService.urlLang;

    let metaData: RouteData = {
      title: "Admin Teacher Profile",
      description: "Here you can view any teacher details",
      robots: "muslim,quran,teacher,profile"
    }
    this.metaService.updateTags(metaData)
  }

  getTeacherData() {
    this.teacherID = this.activeRoute.snapshot.params['id'];
    this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
      this.teacher = t;
      console.log("Teacher Data : ", t);

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
