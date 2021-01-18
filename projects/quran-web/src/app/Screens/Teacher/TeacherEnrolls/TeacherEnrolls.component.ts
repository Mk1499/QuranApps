import { Teacher } from './../../../Models/teacher';
import { Subscription } from 'rxjs';
import { Enroll } from './../../../Models/Enroll.model';
import { TeacherService } from './../../../Services/teacher.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-teacher-enrolls',
  templateUrl: './TeacherEnrolls.component.html',
  styleUrls: ['./TeacherEnrolls.component.css']
})
export class TeacherEnrollsComponent implements OnInit, OnDestroy {

  enrolls: Enroll[] = [];
  teacher: Teacher = JSON.parse(localStorage.getItem("quranTeacher"))
  loading: boolean = true;
  loadSub: Subscription;

  constructor(
    private teacherSer: TeacherService
  ) { }

  ngOnInit(): void {
    this.getEnrolls();
  }

  getEnrolls() {
    this.loadSub = this.teacherSer.getTeacherEnrolls(this.teacher._id).subscribe((enrolls: { data: Enroll[] }) => {
      console.log("Enrolls : ", enrolls);
      this.loading = false;
      this.enrolls = enrolls.data;
    }, (err) => {
      console.log("enrolls err : ", err);
      this.loading = false;

    })
  }
  ngOnDestroy(): void {
    if (this.loadSub)
      this.loadSub.unsubscribe();
  }


}
