import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private translate: TranslateService,
    private title: Title) { }

  ngOnInit(): void {
    this.translate.get('siteName').subscribe(t => {
      if (t !== 'siteNameI')
        this.title.setTitle(t)
    })

  }

}
