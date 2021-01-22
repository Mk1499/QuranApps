import { LangService } from './../Services/lang.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  constructor(
    private router: Router,
    private lang: LangService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree {

    let user = JSON.parse(localStorage.getItem('quranTeacher'));
    let lang = this.lang.urlLang || "en";
    console.log("Active User in Teacher Gaurd: ", user, `/${lang}/Teacher/login`);

    return user && (user.role === "teacher" || user.role === "Teacher") ? true : this.router.parseUrl(`/${lang}/teacher/login`)
  }
}
