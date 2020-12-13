import { LangService } from './Services/lang.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuranWeb';
  lastUsedLang: string = localStorage.getItem('lang') || 'en';
  constructor(private translate: TranslateService) {

    translate.setDefaultLang(this.lastUsedLang);
  }
}
