import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TeacherService } from './../../../Services/teacher.service';
import { LangService } from './../../../Services/lang.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import * as TeacherActions from '../Store/teacher.action';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Teacher } from '../../../Models/teacher';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacherLogin.component.html',
  styleUrls: ['./teacherLogin.component.css']
})

export class TeacherLoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  errMsg: string;
  loading: boolean = false;
  lang: string;
  loginSub: Subscription;

  constructor(
    private teacher: TeacherService,
    private l: LangService,
    private translate: TranslateService,
    private title: Title,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.lang = this.l.urlLang;
    this.translate.get('teacherLogin').subscribe(t => {
      this.title.setTitle(t)
    })
  }

  login() {
    if (!this.email && !this.password) {
      this.errMsg = "Sorry but PW and Email Required"
    } else {
      this.loading = true;
      this.loginSub = this.teacher.teacherLogin(
        this.email.toLocaleLowerCase(),
        this.password
      ).subscribe((data: {teacher : Teacher}) => {
        console.log("Teacher data : ", data);
        this.loading = false;
        localStorage.setItem('quranTeacher', JSON.stringify(data.teacher));
        this.store.dispatch(new TeacherActions.LoginSuccess(data.teacher))
        this.router.navigateByUrl("/" + this.lang + '/teacher')
      },
        (err) => {
          console.log("ErR: ", err);
          this.errMsg = err.error?.message || "something went wrong";
          this.loading = false;

        }
      )

    }
  }


  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
