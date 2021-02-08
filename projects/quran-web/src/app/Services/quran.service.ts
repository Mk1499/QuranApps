import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Aya } from '../Models/Aya.model';
import { baseURL } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class QuranService implements OnInit {


  url: string = "https://api.quran.com/api/v4";
  activeAya: Aya;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {

  }

  getIndex() {
    let url = `${this.url}/chapters`;
    return this.http.get(url);
  }

  getChapterAyat(chapterID) {
    let url = `${this.url}/quran/verses/uthmani?chapter_number=${chapterID}`;
    return this.http.get(url);
  }

  setActiveAya(aya: Aya) {
    this.activeAya = aya;
  }

  updateLectureAya(lectureId: string, newAya: string) {
    let url = `${baseURL}/lecture/changeAya`;
    return this.http.post(url, {
      lectureId,
      newAya
    })
  }



}
