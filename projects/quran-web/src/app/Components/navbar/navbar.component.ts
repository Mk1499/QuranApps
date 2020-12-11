import { LangService } from './../../Services/lang.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active: string;
  urlLang: string;
  constructor(private router: Router, private langService: LangService) { }

  ngOnInit(): void {
    // this.langService.intialization() ; 
    this.urlLang = this.langService.urlLang; 
    this.active = this.router.url.substring(4);

  }

  changeActive(active) {
    this.active = active;
  }

  changeLanguage() {
    this.langService.changeLanguage();
  }

}
