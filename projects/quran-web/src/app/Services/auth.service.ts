import { HttpClient } from '@angular/common/http';
import { SampleService } from './sample.service';
import { LangService } from './lang.service';
import { Router } from '@angular/router';
import { ApiCallService, baseURL } from './api-call.service';
import { Injectable } from '@angular/core';
import * as fromApp from '../Store/app.reducer';
import * as StudentActions from '../Screens/Student/Store/student.action';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'ngx-device-detector';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private router: Router,
    private lang: LangService,
    private sampleSer: SampleService,
    private store: Store<fromApp.AppState>,
    private deviceService: DeviceDetectorService,
    private http: HttpClient

  ) {
    this.user = JSON.parse(localStorage.getItem('quranUser'));
  }

  setActiveUser(user) {
    this.user = user;
    localStorage.setItem('quranUser', JSON.stringify(user));
    this.store.dispatch(new StudentActions.LoginSuccess(user))

  }
  logOut() {
    let url = baseURL + "/student/logout";
    let body = {
      studentId: JSON.parse(localStorage.getItem('quranUser'))._id,
      platform: this.deviceService.isMobile() ? 'mobile' : 'web'
    }
    this.http.post(url, body).subscribe(res => {
      console.log("Logout Res : ", res);

      localStorage.removeItem('quranUser');
      this.router.navigateByUrl('/' + this.lang.urlLang);
      this.sampleSer.changeActiveSample.next(null)
    })
  }

  adminLogOut() {
    localStorage.removeItem('quranAdmin');
    this.router.navigateByUrl('/' + this.lang.urlLang);
    this.sampleSer.changeActiveSample.next(null)

  }

  teacherLogout() {
    let url = baseURL + "/teacher/logout";
    let body = {
      teacherId: JSON.parse(localStorage.getItem('quranTeacher'))._id,
      platform: this.deviceService.isMobile() ? 'mobile' : 'web'
    }
    this.http.post(url, body).subscribe(res => {
      console.log("Logout Res : ", res);
      localStorage.removeItem('quranTeacher');
      this.router.navigateByUrl('/' + this.lang.urlLang);
      this.sampleSer.changeActiveSample.next(null)
    })
  }

}
