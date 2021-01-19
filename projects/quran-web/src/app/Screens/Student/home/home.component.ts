import { RouteData } from './../../../Models/RouteData.model';
import { DynamicMeta } from './../../../Services/dynamicMeta.service';
import { LangService } from './../../../Services/lang.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  direction: string = "ltr";
  constructor(private translate: TranslateService,
    private title: Title,
    private lang: LangService,
    private metaService : DynamicMeta
    ) { }

  ngOnInit(): void {
    this.translate.get('siteName').subscribe(t => {
      if (t !== 'siteName' && t)
        this.title.setTitle(t)
    })
    if (this.lang.urlLang === "ar") {
      this.direction = "rtl";
    } else {
      this.direction = "ltr";
    }

    let metaData : RouteData = {
      title:"Student Home",
      description: "Student Home",
    }
    this.metaService.updateTags(metaData)
  }

}
