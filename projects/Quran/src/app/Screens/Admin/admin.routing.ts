import { AdminGuard } from '../../Guards/Admin.guard';
import { AdminLoginComponent } from './login/login.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeacherProfileComponent } from './admin-teacher-profile/admin-teacher-profile.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLecturesComponent } from './admin-lectures/admin-lectures.component';
import { AdminLectureLiveComponent } from './admin-lecture-live/admin-lecture-live.component';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent, pathMatch: 'full' },
  {
    path: '', component: AdminComponent, children: [
      { path: 'home', component: AdminHomeComponent, pathMatch: 'full' },
      { path: 'teachers', component: AdminTeachersComponent },
      { path: 'lectures', component: AdminLecturesComponent },
      { path: 'lectures/:id', component: AdminLectureLiveComponent },
      { path: 'teachers/:id', component: AdminTeacherProfileComponent },
      { path: 'students', component: AdminStudentsComponent },
      { path: "**", redirectTo: 'home' }
    ],
    canActivate: [AdminGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRouting { }
