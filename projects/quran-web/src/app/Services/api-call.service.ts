import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export const baseURL = "https://quranmkserver.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient, private auth: AuthService) { }
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

  studentLogin(email, password): Observable<any> {
    let url = baseURL + "/student/login";

    return this.http.post(url, {
      email,
      password
    });
  }

  studentReg(user): Observable<any> {
    let url = baseURL + "/student/add";

    return this.http.post(url, {
      email: user.email,
      password: user.password,
      name: user.name
    });
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
