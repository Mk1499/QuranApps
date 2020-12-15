import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  mode: string = localStorage.getItem('theme') || 'dark';
  modeChanging: Subject<string> = new Subject<string>();

  constructor() {

  }


  setDarkTheme() {
    this.mode = 'dark';

  }

  setLightTheme() {
    this.mode = 'light';
  }
  toggleTheme() {
    if (this.mode === 'dark') {

      this.mode = 'light';
      localStorage.setItem('theme', 'light');
    }
    else {
      this.mode = 'dark'
      localStorage.setItem('theme', 'dark');
    }

    // return this.mode;
    this.modeChanging.next(this.mode);
  }
}
