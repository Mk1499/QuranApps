import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LangService implements OnInit {
  urlLang: string = "en";
  constructor(private router: Router, private trans: TranslateService) {
  }

  ngOnInit() {

    this.intialization()
  }
  intialization() {

    this.urlLang = this.router.url.substring(1, 3);
    if (this.urlLang) {
      this.trans.setDefaultLang(this.urlLang);
      localStorage.setItem('lang', this.urlLang);
    }

  }
  changeLanguage() {
    let currentURL = this.router.url;
    if (this.urlLang === "en") {
      this.router.navigateByUrl(currentURL.replace("/en", "/ar"));
      localStorage.setItem('lang', 'ar');
    } else {
      this.router.navigateByUrl(currentURL.replace("/ar", "/en"));
      localStorage.setItem('lang', 'en');
    }
  }

  getLang() {
    return this.router.url.substring(1, 3);
  }



}
