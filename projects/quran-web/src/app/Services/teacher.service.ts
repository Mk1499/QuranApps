import { baseURL } from './api-call.service';
import { Teacher } from '../Models/teacher';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sample } from '../Models/Sample.model';

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
    let url = baseURL + "/teacher/" + teacherID + "/samples";
    return this.http.get(url);
  }

  getTeacherStudents(teacherID) {
    let url = baseURL + "/teacher/" + teacherID + "/students";
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
