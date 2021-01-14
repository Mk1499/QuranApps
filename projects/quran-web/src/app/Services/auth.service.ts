import { SampleService } from './sample.service';
import { LangService } from './lang.service';
import { Router } from '@angular/router';
import { ApiCallService } from './api-call.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private router: Router, private lang: LangService, private sampleSer: SampleService) {
    this.user = JSON.parse(localStorage.getItem('quranUser'));
  }

  setActiveUser(user) {
    this.user = user;
    localStorage.setItem('quranUser', JSON.stringify(user))
  }
  logOut() {
    localStorage.removeItem('quranUser');
    this.router.navigateByUrl('/' + this.lang.urlLang);
    this.sampleSer.changeActiveSample.next(null)
  }

  adminLogOut() {
    localStorage.removeItem('quranAdmin');
    this.router.navigateByUrl('/' + this.lang.urlLang);
    this.sampleSer.changeActiveSample.next(null)

  }

  teacherLogout() {
    localStorage.removeItem('quranTeacher');
    this.router.navigateByUrl('/' + this.lang.urlLang);
    this.sampleSer.changeActiveSample.next(null)


  }

}
