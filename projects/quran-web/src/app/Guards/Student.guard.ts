import { LangService } from './../Services/lang.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(
    private router: Router,
    private lang: LangService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree {

    let user = JSON.parse(localStorage.getItem('quranUser'));
    let lang = this.lang.urlLang || "en";
    console.log("Active User in student Gaurd: ", user, `/${lang}/student/login`);

    return user && user.role == "Student" ? true : this.router.parseUrl(`/${lang}/student/login`)
  }
}
