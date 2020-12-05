import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activePage: string = "books";
  constructor(private translateService:Title, private translate:TranslateService) { }

  ngOnInit(): void {
  }

  changePage(name) {
    this.translate.get(name).subscribe(res => {
      this.translateService.setTitle(res)
    })

    this.activePage = name;
  }

}
