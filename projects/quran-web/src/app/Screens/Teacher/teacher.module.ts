import { TeacherSamples } from './TeacherSamples/TeacherSamples.component';
import { TeacherMainComponent } from './TeacherMain/teacherMain.component';
import { TeacherHomeComponent } from './TeacherHome/teacherHome.component';
import { TeacherNav } from './TeacherNav/teacherNav.component';
import { TeacherLoginComponent } from './TeacherLogin/teacherLogin.component';
import { SharedModule } from './../../shared/shared.module';
import { TeacherRouting } from './teacher.routing';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    TeacherLoginComponent,
    TeacherHomeComponent,
    TeacherMainComponent,
    TeacherNav,
    TeacherSamples
  ],
  imports: [
    SharedModule,
    TeacherRouting,
  ]
})

export class TeacherModule { }
