import { Student } from './../../Models/Student.model';
import { Note } from './../../Models/notification.model';
import { MessagingService } from './../../Services/messaging.service';
import { ThemesService } from './../../Services/themes.service';
import { AuthService } from './../../Services/auth.service';
import { LangService } from './../../Services/lang.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../Store/app.reducer';



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
  newNotes: number;
  allNotes: Note[] = [];

  constructor(private router: Router,
    private langService: LangService,
    private auth: AuthService,
    private theme: ThemesService,
    private msg: MessagingService,
    private store: Store<fromApp.AppState>
  ) {

    theme.modeChanging.subscribe(m => {
      this.mode = m
    });

    msg.newNotesChanged.subscribe(n => {
      this.allNotes.push(n);
      this.newNotes++;
    })
  }

  ngOnInit(): void {
    this.langService.intialization();
    this.urlLang = this.langService.urlLang;
    this.active = this.router.url.substring(9);
    // this.user = JSON.parse(localStorage.getItem('quranUser'));
    this.store.select("studentData").subscribe(s => {
      this.user = s.student
    })
    this.mode = this.theme.mode;
    this.allNotes = this.msg.allNotes;
    this.newNotes = this.msg.newNotes;
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

  emptyNotes() {
    this.newNotes = 0;
  }
}
