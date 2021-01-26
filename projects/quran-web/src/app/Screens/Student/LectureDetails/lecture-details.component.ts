import { SuccessAlertComponent } from './../../../Components/success-alert/success-alert.component';
import { Student } from './../../../Models/Student.model';
import { StudentService } from './../../../Services/student.service';
import { LangService } from './../../../Services/lang.service';
import { Lecture } from './../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { LectureService } from './../../../Services/lecture.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit, OnDestroy {
  lectureId: string;
  lecture: Lecture;
  lecSubscription: Subscription;
  joinSubscription: Subscription;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  activeLang: string;
  loading: boolean = true;
  remain: string;
  joinning: boolean = false;
  user: Student;
  joined: boolean;
  joinChecked: boolean = false;

  @ViewChild('successAlert') successAlert: SuccessAlertComponent;

  constructor(
    private route: ActivatedRoute,
    private lectureService: LectureService,
    private studentService: StudentService,
    private lang: LangService
  ) { }

  ngOnInit(): void {
    console.log("params : ", this.route.snapshot.params);
    this.lectureId = this.route.snapshot.params.id;
    this.getData();
  }



  getData() {
    this.lecSubscription = this.lectureService.getLectureDetails(this.lectureId).subscribe((lecture: Lecture) => {
      this.lecture = lecture;
      if (this.lecture?.coverURL) {
        this.imageURL = this.lecture.coverURL
      }
      this.checkJoin();
    }, (err) => {
      this.loading = false;
      alert(err);
    })
    this.activeLang = this.lang.getLang();
    this.user = JSON.parse(localStorage.getItem('quranUser'));
  }

  joinLect() {
    this.joinning = true;
    this.lecSubscription = this.studentService
      .joinLecture(this.user._id, this.lectureId)
      .subscribe(res => {
        console.log("Join Res : ", res);
        this.joinning = false;
        this.joined = true;
        this.lecture.students.push(this.user);
        this.successAlert.showAlert();
      })
  }


  checkJoin() {
    let lecStudentIDs = this.lecture.students.map(s => s._id);
    if (lecStudentIDs.includes(this.user._id)) {
      this.joined = true;
    }
    this.loading = false;
  }


  ngOnDestroy() {
    if (this.lecSubscription) {
      this.lecSubscription.unsubscribe();
    }
  }
}
