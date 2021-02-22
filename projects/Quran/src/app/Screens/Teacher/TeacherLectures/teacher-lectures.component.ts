import { Store } from '@ngrx/store';
import { Lecture } from '../../../Models/Lecture.model';
import { TeacherService } from '../../../Services/teacher.service';
import { LangService } from '../../../Services/lang.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-lectures',
  templateUrl: './teacher-lectures.component.html',
  styleUrls: ['./teacher-lectures.component.css']
})
export class TeacherLecturesComponent implements OnInit {

  addDirection: string = "left";
  loading: boolean = true;
  upcomingLecs: any =[];
  finishedLecs: any =[];
  cancelledLecs: any =[];


  constructor(
    private lang: LangService,
    private teacherService: TeacherService,
    private store: Store
  ) { }

  ngOnInit(): void {
    if (this.lang.getLang() === 'ar') {
      this.addDirection = "left"
    } else {
      this.addDirection = "right"
    }
    this.getLectures()
  }

  getLectures() {
    this.teacherService.getTeacherLectures().subscribe((lectures: [Lecture]) => {
      console.log("Teacher Lectuers  : ", lectures);
      this.filterLectures(lectures);

    })
  }

  filterLectures(lectures: [Lecture]) {
    lectures.map(lec => {
      if (lec.state === "upcoming" || lec.state === "live" || !lec.state) {
        this.upcomingLecs.push(lec)
      }
      else if (lec.state === "finished") {
        this.finishedLecs.push(lec)
      }
      else if (lec.state === "cancelled") {
        this.cancelledLecs.push(lec)
      }
    })
    this.loading = false
  }

}
