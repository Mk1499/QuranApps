import { Teacher } from '../../../Models/teacher';
import { LangService } from '../../../Services/lang.service';
import { Lecture } from '../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { LectureService } from '../../../Services/lecture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuranService } from '../../../Services/quran.service';
import { Aya } from '../../../Models/Aya.model';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit, OnDestroy {
  lectureId: string;
  lecture: Lecture;
  lecSubscription: Subscription;
  changeStateSub: Subscription;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  activeLang: string;
  loading: boolean = true;
  remain: string;
  authorized: boolean = false;
  changeMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private lectureService: LectureService,
    private lang: LangService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("params : ", this.route.snapshot.params);
    this.lectureId = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.lecSubscription = this.lectureService.getLectureDetails(this.lectureId).subscribe((lecture: Lecture) => {
      console.log("Loaded Lec : ", lecture);
      this.lecture = lecture;
      // this.loading = false;
      if (this.lecture?.coverURL) {
        this.imageURL = this.lecture.coverURL
      }
      // if (!this.lecture.state || this.lecture.state === 'upcoming') {
      //   let msDate = new Date(this.lecture.time).getTime();
      //   let msDuration = +this.lecture.duration * 60000;
      //   let msNow = new Date().getTime();

      //   if (msNow > (msDuration + msDate)) {
      //     this.lecture.state = "expired"
      //   } else if (msNow > msDate && msNow < (msDate + msDuration)) {
      //     this.lecture.state = "live"
      //   } else {
      //     this.lecture.state = "upcoming"
      //   }
      // }

      if (!this.lecture.state) {
        this.lecture.state = 'upcoming'
      }

      this.checkAuth();
    }, (err) => {
      this.loading = false;
      alert(err);
    })
    this.activeLang = this.lang.getLang();
  }


  checkAuth() {
    let teacher: Teacher = JSON.parse(localStorage.getItem('quranTeacher'));
    if (this.lecture.teacher._id === teacher._id) {
      this.authorized = true;
    }
    console.log("auth : ", this.authorized);

    this.loading = false;
  }

  openChangeAlert() {
    this.changeMode = true;
  }
  closeChangeAlert(changedAya) {
    this.changeMode = false;
    console.log("Changed Aya : ", changedAya);
    if (changedAya) {
      this.lecture.aya = changedAya;
    }

  }


  changeState(state) {
    this.changeStateSub = this.lectureService.changeLectureState(this.lectureId, state).subscribe(() => {
      this.router.navigate(['./live'], {
        relativeTo: this.route
      })
    })
  }

  ngOnDestroy() {
    if (this.lecSubscription) {
      this.lecSubscription.unsubscribe();
    }
  }
}
