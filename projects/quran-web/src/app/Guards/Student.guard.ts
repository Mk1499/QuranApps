import { Store } from '@ngrx/store';
import { LangService } from './../Services/lang.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import * as fromApp from '../Store/app.reducer';
import * as studentActions from '../Screens/Student/Store/student.action';


@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(
    private router: Router,
    private lang: LangService,
    private store: Store<fromApp.AppState>
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree {

    let user = JSON.parse(localStorage.getItem('quranUser'));
    let lang = this.lang.urlLang || "en";

    if (user && user.role == "Student") {
      this.store.dispatch(new studentActions.LoginSuccess(user))
      return true;
    }

    else {
      this.router.parseUrl(`/${lang}/student/login`)
    }

  }
}
