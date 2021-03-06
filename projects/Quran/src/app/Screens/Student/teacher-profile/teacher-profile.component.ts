import { Lecture } from '../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { TeacherService } from '../../../Services/teacher.service';
import { Title } from '@angular/platform-browser';
import { LangService } from '../../../Services/lang.service';
import { ApiCallService } from '../../../Services/api-call.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sample } from '../../../Models/Sample.model';


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit, OnDestroy {

  teacherID: string = "";
  teacher;
  user: any = JSON.parse(localStorage.getItem('quranUser'))
  loading: boolean = false;
  enrolled: boolean = false;
  lang: string;
  loadSamples: boolean = true;
  loadLecture: boolean = true;
  samples: Sample[] = [];
  lectures: Lecture[] = [];
  teacherSamplesSub: Subscription;
  teacherLecSub: Subscription;

  constructor(private apiService: ApiCallService,
    private activeRoute: ActivatedRoute,
    private langService: LangService,
    private title: Title,
    private teacherSer: TeacherService
  ) { }

  ngOnInit(): void {
    this.getTeacherData();
    this.getTeacherLectures();
    this.lang = this.langService.urlLang;
  }

  getTeacherData() {
    this.teacherID = this.activeRoute.snapshot.params['id'];
    this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
      console.log("teacherData : ", t);

      this.teacher = t;
      this.getSamples();

      if (this.teacher.students.includes(this.user._id)) {
        this.enrolled = true
      } else {
        this.enrolled = false
      }
      this.title.setTitle(this.teacher.name || "Teacher Profile")
    })
  }

  getTeacherLectures() {
    this.teacherLecSub = this.teacherSer.getTeacherLectures(this.teacherID).subscribe((lecs: Lecture[]) => {
      console.log("Teacher Lecs : ", lecs);
      this.lectures = lecs.filter(l => l.state === "upcoming" || l.state === "live" || !l.state);
      this.loadLecture = false;
    })
  }

  getSamples() {
    this.teacherSamplesSub = this.teacherSer.getTeacherSamples(this.teacher._id).subscribe((smpls: Sample[]) => {
      this.samples = smpls;
      this.loadSamples = false;
    }, (err) => {
      this.loadSamples = false;
      console.log("Load Samples Err :  ", err);
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

  ngOnDestroy() {
    this.teacherSamplesSub.unsubscribe();
  }
}
