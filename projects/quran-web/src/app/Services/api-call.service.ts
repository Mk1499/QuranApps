import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseURL = "https://quranmkserver.herokuapp.com";

  constructor(private http: HttpClient) { }
  getTeachers(): Observable<any> {
    let url = this.baseURL + "/teacher";
    return this.http.get(url)
  }

}
