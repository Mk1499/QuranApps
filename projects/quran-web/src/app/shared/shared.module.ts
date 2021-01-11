import { NavbarComponent } from '../Components/navbar/navbar.component';
import { TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SampleCardComponent } from '../Components/sample-card/sample-card.component';
import { TeacherCardComponent } from '../Components/teacher-card/teacher-card.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { translateBrowserLoaderFactory } from './loaders/translate-browser.loader';



@NgModule({
  declarations: [
    TeacherCardComponent,
    SampleCardComponent ,
    NavbarComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
  ],
  exports:[
    CommonModule,
    RouterModule,
    TeacherCardComponent,
    SampleCardComponent,
    TranslateModule,
    NavbarComponent
  ]
})

export class SharedModule { }
