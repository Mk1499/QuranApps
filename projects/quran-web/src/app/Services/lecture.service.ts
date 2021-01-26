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

}
