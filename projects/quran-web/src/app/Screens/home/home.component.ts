import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translate:TranslateService,
              private title:Title) { }

  ngOnInit(): void {
    this.translate.get('siteName').subscribe(t => this.title.setTitle(t))
  }

}
