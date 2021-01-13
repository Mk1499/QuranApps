import { FormsModule } from '@angular/forms';
import { TeacherSamples } from './TeacherSamples/TeacherSamples.component';
import { TeacherMainComponent } from './TeacherMain/teacherMain.component';
import { TeacherHomeComponent } from './TeacherHome/teacherHome.component';
import { TeacherNav } from './TeacherNav/teacherNav.component';
import { TeacherLoginComponent } from './TeacherLogin/teacherLogin.component';
import { SharedModule } from './../../shared/shared.module';
import { TeacherRouting } from './teacher.routing';
import { NgModule } from "@angular/core";
import { TeacherStudentsComponent } from './TeacherStudents/teacher-students.component';
import { AddSampleComponent } from './AddSample/AddSample.component';
import { TeacherEnrollsComponent } from './TeacherEnrolls/TeacherEnrolls.component';

@NgModule({
  declarations: [
    TeacherLoginComponent,
    TeacherHomeComponent,
    TeacherMainComponent,
    TeacherNav,
    TeacherSamples,
    TeacherStudentsComponent,
    AddSampleComponent,
    TeacherEnrollsComponent,
  ],
  imports: [
    SharedModule,
    TeacherRouting,
    FormsModule
  ]
})

export class TeacherModule { }
