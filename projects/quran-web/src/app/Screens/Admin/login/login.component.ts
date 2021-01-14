import { LangService } from './../../../Services/lang.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiCallService } from './../../../Services/api-call.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  email: string;
  password: string;
  errMsg: string = '';
  loginSub: Subscription;
  constructor(
    private api: ApiCallService,
    private title: Title,
    private router: Router,
    private l: LangService
  ) { }

  ngOnInit(): void {
  }

  login() {
    let data = {
      email: this.email,
      password: this.password
    }
    console.log("Email : ", this.email);
    this.loading = true;

    this.loginSub = this.api.adminLogin(data).subscribe(d => {
      console.log("Admin Login Data : ", d);
      localStorage.setItem('quranAdmin', JSON.stringify(d));
      this.loading = false;
      this.router.navigateByUrl("/" + this.l.urlLang + '/admin/home')
    }
      ,
      err => {
        console.log("ERR admin login : ", err);

        this.loading = false,
          this.errMsg = err.message || "Can't Login Please Try Later";
      }
    )
  }



  ngOnDestroy() {

  }
}
