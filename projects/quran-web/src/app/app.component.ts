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

  constructor(private translate: TranslateService, private router: Router , private lang:LangService) {
    let url = router.url;
    let selLang = url.substring(0); 
    console.log("LA : ",url.substring(1));
    console.log("Router URLl : ", url);


    translate.setDefaultLang("ar")
  }
}
