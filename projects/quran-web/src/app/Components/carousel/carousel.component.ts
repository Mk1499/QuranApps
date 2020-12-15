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
    private title: Title , private meta:Meta) { }

  ngOnInit(): void {
    this.translate.get('siteName').subscribe(t => {
      this.title.setTitle(t)
   
    })

  }

}
