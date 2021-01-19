import { DynamicMeta } from './../../../Services/dynamicMeta.service';
import { RouteData } from './../../../Models/RouteData.model';
import { StudentService } from './../../../Services/student.service';
import { ApiCallService } from '../../../Services/api-call.service';
import { AuthService } from '../../../Services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { Teacher } from '../../../Models/teacher';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user;
  loading: boolean = true;
  sub: Subscription;
  getTeachersSub: Subscription;

  constructor(
    private auth: AuthService,
    private api: ApiCallService,
    private student: StudentService,
    private metaService: DynamicMeta
    ) { }

  ngOnInit(): void {
    this.user = this.auth.user;
    this.getStudentData();

    let metaData : RouteData = {
      title:"Student Profile",
      description: "Student Profile data",
    }
    this.metaService.updateTags(metaData)
  }

  getStudentData() {
    this.sub = this.api.getStudentProfile(this.auth.user._id).subscribe(data => {
      console.log("US : ", data);

      this.user = data;
      // this.loading = false;
      this.auth.setActiveUser(this.user)
      this.getStudentTeachers(this.user._id)
    })
  }

  getStudentTeachers(studentID) {
    this.getTeachersSub = this.student.getTeachers(studentID).subscribe((teachers: Teacher[]) => {
      this.user['teachers'] = teachers;
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.getTeachersSub) {
      this.getTeachersSub.unsubscribe();
    }
  }

}
