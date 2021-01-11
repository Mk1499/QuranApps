import { TeacherSamples } from './TeacherSamples/TeacherSamples.component';
import { TeacherHomeComponent } from './TeacherHome/teacherHome.component';
import { TeacherMainComponent } from './TeacherMain/teacherMain.component';
import { TeacherLoginComponent } from './TeacherLogin/teacherLogin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'login', component: TeacherLoginComponent },
  {
    path: '', component: TeacherMainComponent, children: [
      { path: 'home', component: TeacherHomeComponent },
      { path: 'library', component: TeacherSamples },
      { path: '**', redirectTo: 'home' }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TeacherRouting { }
