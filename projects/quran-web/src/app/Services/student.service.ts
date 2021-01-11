import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(
    private http: HttpClient
  ) { }

  getTeachers(studentID) {
    let url = baseURL + "/student/" + studentID + "/teachers"
    return this.http.get(url);
  }
}
