import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentLang: string = localStorage.getItem('lang');
  // rootStyle: any = <HTMLElement>document.querySelector(":root");
// 

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    console.log("Current Lang : ", this.currentLang);

  }

  changeLang(targetLang) {
    // let targetLang = localStorage.getItem('lang') === 'en' ? 'ar' : 'en'; 
    console.log("Target  ", targetLang);
    let dir = targetLang === 'ar' ? 'rtl' : 'ltr';
    let float = targetLang === 'ar' ? 'right' : 'left';

    
    document.documentElement.style.setProperty('--dir', dir);
    document.documentElement.style.setProperty('--float', float);

    localStorage.setItem('lang', targetLang);
    localStorage.setItem('dir', dir);
    this.translate.use(targetLang);
  }

}
