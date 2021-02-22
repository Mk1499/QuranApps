import { baseURL } from './api-call.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeacherStudentsComponent } from '../Screens/Teacher/TeacherStudents/teacher-students.component';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(
    private http: HttpClient
  ) {

  }

  getLectureDetails(lectureId) {
    let url = baseURL + "/lecture/" + lectureId;
    return this.http.get(url);
  }

  finishLecture(id) {
    let url = baseURL + '/lecture/finish';
    let body = {
      id
    };
    return this.http.post(url, body);
  }

  getAllLectures() {
    let url = baseURL + "/lecture/all";
    return this.http.get(url);
  }

  changeLectureState(lectureId, newState) {
    let url = baseURL + "/lecture/changeState";
    let body = {
      lectureId,
      newState
    }
    return this.http.post(url, body);
  }

}
