import { Note } from './../../Models/notification.model';
import { MessagingService } from './../../Services/messaging.service';
import { ThemesService } from './../../Services/themes.service';
import { AuthService } from './../../Services/auth.service';
import { LangService } from './../../Services/lang.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { json } from 'express';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active: string;
  urlLang: string;
  user: any;
  mode: string;
  newNote:number; 
  allNotes:Note[] = [];
  constructor(private router: Router,
    private langService: LangService,
    private auth: AuthService,
    private theme: ThemesService, 
    private msg: MessagingService) {

    theme.modeChanging.subscribe(m => {
      this.mode = m
    })
  }

  ngOnInit(): void {
    this.langService.intialization();
    this.urlLang = this.langService.urlLang;
    this.active = this.router.url.substring(9);
    this.user = JSON.parse(localStorage.getItem('quranUser'));
    this.mode = this.theme.mode;
    this.allNotes = this.msg.allNotes; 
    this.newNote = this.msg.newNotes; 
  }

  changeActive(active) {
    this.active = active;
  }

  changeLanguage() {
    this.langService.changeLanguage();
  }
  logOut() {
    this.auth.logOut();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
