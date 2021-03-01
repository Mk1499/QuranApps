import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Aya } from '../Models/Aya.model';
import { baseURL } from './api-call.service';

export const audioURL = "https://audio.qurancdn.com/";
@Injectable({
  providedIn: 'root'
})


export class QuranService implements OnInit {


  url: string = "https://api.quran.com/api/v4";
  urlAya: string = "https://audio.qurancdn.com/wbw/002_001_001.mp3"
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


  getChapterAyatAudio(chapterID) {
    let url = `${this.url}/quran/recitations/1?chapter_number=${chapterID}`;
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
