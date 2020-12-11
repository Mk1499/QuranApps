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

  studentLogin(email, password): Observable<any> {
    let url = this.baseURL + "/student/login";
    console.log("Email: ",email);
    
    return this.http.post(url, {
      email,
      password
    });
  }
}
