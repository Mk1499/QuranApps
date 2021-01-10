import { TranslateModule } from '@ngx-translate/core';
import { SampleCardComponent } from './../../Components/sample-card/sample-card.component';
import { RouterModule } from '@angular/router';
import { TeacherCardComponent } from './../../Components/teacher-card/teacher-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    TeacherCardComponent,
    SampleCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    CommonModule,
    RouterModule,
    TeacherCardComponent,
    SampleCardComponent,
    TranslateModule
  ]
})

export class SharedModule { }
