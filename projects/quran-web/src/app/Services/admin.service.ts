import { HttpClient } from '@angular/common/http';
import { baseURL } from './api-call.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getActiveEnrolls = () => {
    let url = baseURL + "/enroll/all/active/grouped";
    return this.http.get(url);
  }
  getAllEnrolls = () => {
    let url = baseURL + "/enroll/all/grouped";
    return this.http.get(url);
  }
  getAllUnEnrolls = () => {
    let url = baseURL + "/enroll/unenrolls/grouped";
    return this.http.get(url);
  }
  getStudentEnrolls = (id: string) => {
    let url = baseURL + "/enroll/student/" + id;
    return this.http.get(url);
  }
  getStudentActiveEnrolls = (id: string) => {
    let url = baseURL + "/enroll/student/" + id + "/active";
    return this.http.get(url);
  }

}
