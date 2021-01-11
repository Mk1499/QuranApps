import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { ApiCallService } from '../../../Services/api-call.service';
import { LangService } from '../../../Services/lang.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent implements OnInit {

  email: string;
  password: string;
  username: string;
  loading: boolean = false;
  lang: string;
  errMsg: string = "";
  constructor(private l: LangService,
             private api: ApiCallService,
             private auth: AuthService,
             private router: Router,
             private  translate:TranslateService,
             private title:Title) { }

  ngOnInit(): void {
    this.lang = this.l.urlLang;
    this.translate.get('studentLogin').subscribe(t => {
      this.title.setTitle(t)
    })
  }
  register() {

    let user = {
      email: this.email,
      password: this.password,
      name: this.username
    }
    this.loading = true;
    this.api.studentReg(user).subscribe(user => {
      this.auth.setActiveUser(user?.student);
      this.loading = false;
      localStorage.setItem('quranUser', JSON.stringify(user?.student))
      this.router.navigateByUrl('/' + this.lang + '/home')
    }
      ,
      err => {
        console.log("Error : ", err);
        this.loading = false;

      }
    );

  }

}
