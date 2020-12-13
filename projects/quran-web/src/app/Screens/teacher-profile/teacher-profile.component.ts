import { ApiCallService } from './../../Services/api-call.service';
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

  constructor(private apiService: ApiCallService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTeacherData()
  }

  getTeacherData() {
    this.teacherID = this.activeRoute.snapshot.params['id'];
    this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
      this.teacher = t.teacher[0];
    })
  }

  enroll() {
    let data = {
      userID: this.user._id,
      teacher: this.teacher._id
    }
    this.loading = true;
    this.apiService.studentEnroll(data).subscribe(res => {
      this.loading = false;
      this.getTeacherData();
      console.log("Enroll RES :", res);

    },
      (err) => {
        this.loading = false;
        console.error("ERR ", err);

      }
    )
  }
}
