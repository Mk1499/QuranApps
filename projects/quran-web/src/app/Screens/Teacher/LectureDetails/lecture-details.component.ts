import { LangService } from './../../../Services/lang.service';
import { Lecture } from './../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { LectureService } from './../../../Services/lecture.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit, OnDestroy {
  lectureId: string;
  lecture: Lecture;
  lecSubscription: Subscription;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  activeLang: string;
  loading: boolean = true;
  remain:string;

  constructor(
    private route: ActivatedRoute,
    private lectureService: LectureService,
    private lang: LangService
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
      this.loading = false;
      if (this.lecture?.coverURL) {
        this.imageURL = this.lecture.coverURL
      }

    }, (err) => {
      this.loading = false;
      alert(err);
    })
    this.activeLang = this.lang.getLang();
  }




  ngOnDestroy() {
    if (this.lecSubscription) {
      this.lecSubscription.unsubscribe();
    }
  }
}
