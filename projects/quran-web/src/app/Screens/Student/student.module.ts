import { StudentComponent } from './student.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentRegComponent } from './student-reg/student-reg.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ProfileComponent } from './profile/profile.component';
import { LiberaryComponent } from './liberary/liberary.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgModule } from "@angular/core";
import { StudentRouting } from "./student.routing";
import { LectureDetailsComponent } from './LectureDetails/lecture-details.component';
import { LectureComponent } from './Lecture/lecture.component';
import { LectureLiveComponent } from './LectureLive/lecture-live.component';




@NgModule({
  declarations: [
    LiberaryComponent,
    ProfileComponent,
    StudentLoginComponent,
    StudentRegComponent,
    TeacherComponent,
    TeacherProfileComponent,
    HomeComponent,
    StudentComponent,
    LectureDetailsComponent,
    LectureComponent,
    LectureLiveComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    StudentRouting,
    SharedModule,
  ],
})

export class StudentModule { }
