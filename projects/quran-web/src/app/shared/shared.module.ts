import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { LogoComponent } from '../Components/logo/logo.component';
import { TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SampleCardComponent } from '../Components/sample-card/sample-card.component';
import { TeacherCardComponent } from '../Components/teacher-card/teacher-card.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { translateBrowserLoaderFactory } from './loaders/translate-browser.loader';
import { StudentCardComponent } from '../Components/student-card/student-card.component';
import { SuccessAlertComponent } from '../Components/success-alert/success-alert.component';
import { AudioPlayerComponent } from '../Components/audio-player/audio-player.component';



@NgModule({
  declarations: [
    TeacherCardComponent,
    SampleCardComponent,
    NavbarComponent,
    LogoComponent,
    StudentCardComponent,
    SuccessAlertComponent,
    AudioPlayerComponent

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
    // FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    TeacherCardComponent,
    SampleCardComponent,
    TranslateModule,
    NavbarComponent,
    LogoComponent,
    FormsModule,
    StudentCardComponent,
    SuccessAlertComponent,
    AudioPlayerComponent
  ]
})

export class SharedModule { }
