import { ThemesService } from './../../Services/themes.service';
import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  mode: string;
  constructor(private theme:ThemesService) {
    theme.modeChanging.subscribe(m =>{
      this.mode = m;
    })
   }

  ngOnInit(): void {
    this.mode = this.theme.mode;
  }

}
