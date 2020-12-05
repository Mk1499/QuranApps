import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Booky DB';
  currentLang: string = localStorage.getItem('lang');
  direction: string = localStorage.getItem('dir');
  // rootStyle = document.querySelector(":root");

  constructor(private translate: TranslateService ) {
    let language = this.currentLang ? this.currentLang : 'en';
    let dir = this.direction ? this.direction : 'ltr';
    localStorage.setItem("lang", language);
    translate.setDefaultLang(language);

    // document.documentElement.style.setProperty('--dir', dir);
  }



}
