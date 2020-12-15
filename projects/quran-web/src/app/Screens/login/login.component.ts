import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { LangService } from './../../Services/lang.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lang: string;
  constructor(private langService: LangService,
    private title: Title,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.langService.intialization();
    this.lang = this.langService.urlLang;
    this.translate.get('siteName').subscribe(t => this.title.setTitle(t))

  }

}
