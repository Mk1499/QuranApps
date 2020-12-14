import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  mode: string = 'dark';
  modeChanging:Subject<string> = new Subject<string>();

  constructor() {

   }


  setDarkTheme() {
    this.mode = 'dark';
  }

  setLightTheme() {
    this.mode = 'light';
  }
  toggleTheme() {
    if (this.mode === 'dark')
      this.mode = 'light';
    else
      this.mode = 'dark'
    // return this.mode;
    this.modeChanging.next(this.mode); 
  }
}
