import { Teacher } from './../../../Models/teacher';
import { Subscription } from 'rxjs';
import { MessagingService } from '../../../Services/messaging.service';
import { ThemesService } from '../../../Services/themes.service';
import { AuthService } from '../../../Services/auth.service';
import { LangService } from '../../../Services/lang.service';
import { Note } from '../../../Models/notification.model';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'teacher-nav',
  templateUrl: './teacherNav.component.html',
  styleUrls: ['./teacherNav.css']
})

export class TeacherNav implements OnInit {
  active: string;
  urlLang: string;
  user: Teacher;
  mode: string;
  newNotes: number;
  allNotes: Note[] = [];
  prevNotesSub: Subscription;

  constructor(
    private router: Router,
    private langService: LangService,
    private auth: AuthService,
    private theme: ThemesService,
    private msg: MessagingService) {

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
    this.user = JSON.parse(localStorage.getItem('quranTeacher'));
    this.mode = this.theme.mode;
    // this.allNotes = this.msg.allNotes;
    // this.newNotes = this.msg.newNotes;
    this.getPrevNotes();
  }

  getPrevNotes() {
    this.prevNotesSub = this.msg.getIntialNotes(this.user._id, "Teacher").subscribe((notes: Note[]) => {
      console.log("All Notes : ", notes);

      this.allNotes = notes
    })
  }

  changeActive(active) {
    this.active = active;
  }

  changeLanguage() {
    this.langService.changeLanguage();
  }
  logOut() {
    this.auth.teacherLogout();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  emptyNotes() {
    this.newNotes = 0;
  }
}
