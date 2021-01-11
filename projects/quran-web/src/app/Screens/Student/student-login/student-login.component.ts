import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './../../../Services/lang.service';
import { Router } from '@angular/router';
import { ApiCallService } from './../../../Services/api-call.service';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  email: string;
  password: string;
  errMsg: string;
  loading: boolean = false;
  lang: string;
  constructor(private auth: AuthService,
    private api: ApiCallService,
    private router: Router,
    private l: LangService,
    private translate: TranslateService,
    private title: Title) { }

  ngOnInit(): void {
    this.lang = this.l.urlLang;
    this.translate.get('studentLogin').subscribe(t => {
      this.title.setTitle(t)
    })
  }

  login() {
    if (!this.email && !this.password) {
      this.errMsg = "Sorry but PW and Email Required"
    } else {

      this.loading = true;
      this.api.studentLogin(this.email, this.password).subscribe(data => {
        console.log("Data : ", data);
        this.auth.setActiveUser(data?.student);
        localStorage.setItem('quranUser', JSON.stringify(data?.student))
        this.router.navigateByUrl('/' + this.lang + '/student/home')
      }, err => {
        console.log("err: ", err.error);
        this.loading = false;
        this.errMsg = err.error.message;

      },
        () => {
          this.loading = false;
          this.errMsg = "";
        })
    }
  }

}
