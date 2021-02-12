import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import * as fromApp from '../Store/app.reducer';

// export const baseURL = "http://localhost:3005";
export const baseURL = "https://quranmkserver.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient, private store: Store<fromApp.AppState>) { }
  getTeachers(): Observable<any> {
    let url = baseURL + "/teacher";
    return this.http.get(url)
  }
  getSamples(): Observable<any> {
    let url = baseURL + "/sample";
    return this.http.get(url)
  }
  getTeacherProfile(id): Observable<any> {
    let url = baseURL + "/teacher/" + id;
    return this.http.get(url);
  }

  getStudentProfile(id): Observable<any> {
    let url = baseURL + "/student/" + id;
    return this.http.get(url);
  }

  studentLogin(email, password, webToken, mobileToken): Observable<any> {
    let url = baseURL + "/student/login";
    let body = {
      email,
      password
    }

    if (webToken) {
      body['webToken'] = webToken;
    }
    if (mobileToken) {
      body['mobileToken'] = mobileToken;
    }


    return this.http.post(url, body);
  }

  studentReg(user): Observable<any> {
    let url = baseURL + "/student/add";
    let body = {
      email: user.email,
      password: user.password,
      name: user.name
    }
    this.store.select("notificationTokens").subscribe(tokens => {
      if (tokens.mobileToken) {
        body['mobileToken'] = tokens.mobileToken
      } else if (tokens.webToken) {
        body['webToken'] = tokens.webToken
      }
    })
    console.log("body before reg : ", body);

    return this.http.post(url, body);
  }

  studentEnroll(data): Observable<any> {

    let url = baseURL + "/enroll";
    return this.http.post(url, {
      teacherID: data.teacherID,
      studentID: data.studentID
    })
  }

  studentUnEnroll(data): Observable<any> {
    let url = baseURL + "/enroll/remove";
    return this.http.post(url, {
      teacherID: data.teacherID,
      studentID: data.studentID
    })
  }


  adminLogin(data): Observable<any> {
    let url = baseURL + "/admin/login";
    console.log("Login Data : ", data);

    return this.http.post(url, {
      email: data.email,
      password: data.password
    })
  }


}
