import { baseURL } from './api-call.service';
import { Teacher } from '../Models/teacher';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

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
    return this.http.post(url, body);
  }

  getTeacherData(teacherID) {
    let url = baseURL + "/teacher/" + teacherID;
    return this.http.get(url);
  }
  getTeacherSamples(teacherID) {
    let url = baseURL + "/sample/teacher/" + teacherID;
    return this.http.get(url);
  }
}
