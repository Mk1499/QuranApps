import { baseURL } from './api-call.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
