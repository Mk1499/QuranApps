import { Student } from '../Models/Student.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { baseURL } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  student: Student;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('quranUser'));
  }

  getTeachers(studentID) {
    let url = baseURL + "/student/" + studentID + "/teachers"
    return this.http.get(url);
  }

  joinLecture(studentId, lectureId, studentName) {
    let url = baseURL + "/lecture/join";
    let body = {
      studentId,
      lectureId,
      studentName
    }
    return this.http.post(url, body)
  }

  getLectures(studentID) {
    let url = baseURL + "/lecture/student/" + studentID;
    return this.http.get(url);
  }

}
