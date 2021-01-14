import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector:'app-student',
  template:"<p></p>"
})

export class StudentComponent {
  lastUsedLang: string = localStorage.getItem('lang') || 'en';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.lastUsedLang);
  }
}
