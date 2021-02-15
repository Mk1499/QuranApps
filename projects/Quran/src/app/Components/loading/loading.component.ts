import { Student } from '../../Models/Student.model';
import { Store } from '@ngrx/store';
import { LangService } from '../../Services/lang.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../Store/app.reducer';
import * as studentActions from '../../Screens/Student/Store/student.action';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  storedUser: string = localStorage.getItem('quranUser');
  storedTeacher: string = localStorage.getItem('quranTeacher');
  storedAdmin: string = localStorage.getItem('quranAdmin');

  constructor(private router: Router, private langS: LangService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.langS.intialization();

    if (this.storedUser) {

      let student: Student = JSON.parse(this.storedUser);
      this.store.dispatch(new studentActions.LoginSuccess(student))
      setTimeout(() => {
        this.router.navigateByUrl(this.langS.urlLang + '/student')
      }, 2000)
    }
    else if (this.storedAdmin) {
      setTimeout(() => {
        this.router.navigateByUrl(this.langS.urlLang + '/admin')
      }, 2000)
    }
    else if (this.storedTeacher) {
      setTimeout(() => {
        this.router.navigateByUrl(this.langS.urlLang + '/teacher')
      }, 2000)
    }
    else {
      setTimeout(() => {
        this.router.navigateByUrl(this.langS.urlLang + '/login')
      }, 2000)
    }
  }

}
