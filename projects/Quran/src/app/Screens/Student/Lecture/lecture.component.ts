import { Subscription } from 'rxjs';
import { StudentService } from '../../../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { Lecture } from '../../../Models/Lecture.model';
import { Student } from '../../../Models/Student.model';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  upcomigLectures: Lecture[] = [];
  cancelledLectures: Lecture[] = [];
  lecSub: Subscription;
  student: Student;
  loading: boolean = true;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {

    this.student = JSON.parse(localStorage.getItem("quranUser"));

    this.lecSub = this.studentService.getLectures(this.student._id).subscribe((lecs: Lecture[]) => {
      lecs.map((lec) => {
        if (!lec.state || lec.state === "upcoming" || lec.state === "live") {
          this.upcomigLectures.push(lec);
        }
        if (lec.state === "cancelled") {
          this.cancelledLectures.push(lec);
        }
      })
      this.loading = false;
    })
  }

}
