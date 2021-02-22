import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lecture } from '../../../Models/Lecture.model';
import { LectureService } from '../../../Services/lecture.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-lectures',
  templateUrl: './admin-lectures.component.html',
  styleUrls: ['./admin-lectures.component.css']
})
export class AdminLecturesComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  lectures: Lecture[] = [];
  lecturesCopy: Lecture[] = [];
  lecSub: Subscription;
  filterState: string = "upcoming";

  constructor(
    private lectureService: LectureService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.lecSub = this.lectureService.getAllLectures().subscribe((lectures: Lecture[]) => {
      console.log("lectrue : ", lectures);

      this.lectures = lectures;
      this.lecturesCopy = lectures;
      this.loading = false;
    })
  }


  changeFilter(state) {
    console.log("Filter State : ", state);
    if (state !== 'all') {
      this.lectures = this.lecturesCopy.filter(l => l.state === state)
    } else {
      this.lectures = this.lecturesCopy;
    }
  }

  gotoLecture(lecture: Lecture) {
    console.log('lec : ', lecture);

    if (lecture.state === "live")
      this.router.navigate(['./', lecture._id], {
        relativeTo: this.route
      })
  }

  ngOnDestroy(): void {
    this.lecSub.unsubscribe();
  }



}
