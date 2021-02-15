import { DynamicMeta } from '../../Services/dynamicMeta.service';
import { Store } from '@ngrx/store';
import { ThemesService } from '../../Services/themes.service';
import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { Meta } from '@angular/platform-browser';
import * as fromApp from '../../Store/app.reducer'


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  mode: string;
  constructor(private theme: ThemesService, private metaService: DynamicMeta,
    private store: Store<fromApp.AppState>
  ) {
    theme.modeChanging.subscribe(m => {
      this.mode = m;
    })
  }

  ngOnInit(): void {
    this.mode = this.theme.mode;
    this.metaService.intializTags();
    this.store.select("studentData").subscribe(s => {
      console.log("store in splash : ", s);

    })
  }

}
