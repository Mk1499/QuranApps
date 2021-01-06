import { baseURL } from './api-call.service';
import { Teacher } from './../Interfaces/teacher';
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
}
