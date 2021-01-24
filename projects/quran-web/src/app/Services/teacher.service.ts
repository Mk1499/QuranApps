import { Store } from '@ngrx/store';
import { baseURL } from './api-call.service';
import { Teacher } from '../Models/teacher';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Sample } from '../Models/Sample.model';
import * as fromApp from '../Store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class TeacherService implements OnInit {

  teacherData: Teacher;

  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {

  }

  ngOnInit() {
    this.store.select('teacherData').subscribe(tData => {
      this.teacherData = tData.teacher;
    })
  }

  addManyTeachers(teachers: Teacher[]) {
    let url = baseURL + "/teacher/addMany";
    return this.http.post(url, { teachers })
  }

  teacherLogin(email, password) {
    let url = baseURL + '/teacher/login';
    let body = {
      email,
      password
    }

    this.store.select("notificationTokens").subscribe(tokens => {
      if (tokens.webToken) {
        body['webToken'] = tokens.webToken
      }
      else if (tokens.mobileToken) {
        body['mobileToken'] = tokens.mobileToken
      }
    })
    console.log("Body before sent : ", body);
    return this.http.post(url, body);
  }

  getTeacherData(teacherID) {
    let url = baseURL + "/teacher/" + teacherID;
    return this.http.get(url);
  }
  getTeacherSamples(teacherID) {
    let url = baseURL + "/teacher/" + teacherID + "/samples";
    return this.http.get(url);
  }

  getTeacherStudents(teacherID) {
    let url = baseURL + "/teacher/" + teacherID + "/students";
    return this.http.get(url)
  }

  getTeacherLectures() {
    console.log("Teahcer on store : ", this.teacherData);
    let teacher = JSON.parse(localStorage.getItem("quranTeacher"))
    let url = baseURL + "/teacher/" + teacher._id + "/lectures";
    return this.http.get(url)
  }

  addSample(sample: Sample) {
    let url = baseURL + "/sample/add";
    return this.http.post(url, sample)
  }

  getTeacherEnrolls(teacherID: string) {
    let url = baseURL + "/enroll/teacher/" + teacherID;
    return this.http.get(url);
  }
}
