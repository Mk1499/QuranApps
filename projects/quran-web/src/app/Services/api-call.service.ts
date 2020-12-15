import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseURL = "https://quranmkserver.herokuapp.com";

  constructor(private http: HttpClient, private auth: AuthService) { }
  getTeachers(): Observable<any> {
    let url = this.baseURL + "/teacher";
    return this.http.get(url)
  }
  getSamples(): Observable<any> {
    let url = this.baseURL + "/sample";
    return this.http.get(url)
  }
  getTeacherProfile(id): Observable<any> {
    let url = this.baseURL + "/teacher/" + id;
    return this.http.get(url);
  }

  getStudentProfile(id): Observable<any> {
    let url = this.baseURL + "/student/" + id;
    return this.http.get(url);
  }

  studentLogin(email, password): Observable<any> {
    let url = this.baseURL + "/student/login";

    return this.http.post(url, {
      email,
      password
    });
  }

  studentReg(user): Observable<any> {
    let url = this.baseURL + "/student/add";

    return this.http.post(url, {
      email: user.email,
      password: user.password,
      name: user.name
    });
  }

  studentEnroll(data): Observable<any> {

    let url = this.baseURL + "/student/enroll";
    return this.http.post(url, {
      teacher: data.teacherID,
      student: data.studentID
    })
  }

  studentUnEnroll(data): Observable<any> {
    let url = this.baseURL + "/student/unenroll";
    return this.http.post(url, {
      teacher: data.teacherID,
      student: data.studentID
    })
  }
}
