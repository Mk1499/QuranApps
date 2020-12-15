import { ThemesService } from './../../Services/themes.service';
import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  mode: string;
  constructor(private theme:ThemesService , private meta:Meta) {
    theme.modeChanging.subscribe(m =>{
      this.mode = m;
    })
   }

  ngOnInit(): void {
    this.mode = this.theme.mode;
    this.meta.addTag({
      name:'description',
      content:"This is a web site used to help students to learn Quran Karim "
    })
  }

}
