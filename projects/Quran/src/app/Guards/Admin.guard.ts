import { LangService } from '../Services/lang.service';
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
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private lang: LangService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree {

    let user = JSON.parse(localStorage.getItem('quranAdmin'));
    let lang = this.lang.urlLang || "en";
    console.log("Active User in Admin Gaurd: ", user);

    return user && user.role == "Admin" ? true : this.router.parseUrl(`/${lang}/admin/login`)
  }
}
