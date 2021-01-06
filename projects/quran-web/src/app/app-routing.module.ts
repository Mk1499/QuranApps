import { AddItemComponent } from './Components/add-item/add-item.component';
import { AdminTeacherProfileComponent } from './Screens/Admin/admin-teacher-profile/admin-teacher-profile.component';
import { AdminStudentsComponent } from './Screens/Admin/admin-students/admin-students.component';
import { AdminTeachersComponent } from './Screens/Admin/admin-teachers/admin-teachers.component';
import { AdminHomeComponent } from './Screens/Admin/admin-home/admin-home.component';
import { AdminComponent } from './Screens/Admin/admin/admin.component';
import { AdminLoginComponent } from './Screens/Admin/login/login.component';
import { ProfileComponent } from './Screens/profile/profile.component';
import { StudentRegComponent } from './Screens/student-reg/student-reg.component';
import { StudentLoginComponent } from './Screens/student-login/student-login.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { HomeComponent } from './Screens/home/home.component';
import { SplashComponent } from './Screens/splash/splash.component';
import { TeacherProfileComponent } from './Screens/teacher-profile/teacher-profile.component';
import { LiberaryComponent } from './Screens/liberary/liberary.component';
import { TeacherComponent } from './Screens/teacher/teacher.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LoginComponent } from './Screens/login/login.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const lang = localStorage.getItem('lang') || 'ar';
console.log("LAng : ", lang);


const routes: Routes = [
  {
    path: 'ar', component: SplashComponent,
    children: [
      { path: '', component: LoadingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/student', component: StudentLoginComponent },
      { path: 'reg/student', component: StudentRegComponent },

      {
        path: 'home', component: HomeComponent, children: [
          { path: '', component: CarouselComponent },
          { path: 'teachers', component: TeacherComponent },
          { path: 'teachers/:id', component: TeacherProfileComponent },
          { path: 'library', component: LiberaryComponent },

        ]
      },
      { path: 'admin/login', component: AdminLoginComponent },
      {
        path: 'admin', component: AdminComponent, children: [
          { path: '', component: AdminHomeComponent , pathMatch:'full' },
          { path: 'teachers', component: AdminTeachersComponent },
          { path: 'teachers/:id', component: AdminTeacherProfileComponent },
          { path: 'students', component: AdminStudentsComponent },
        ]
      },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'en', component: SplashComponent,
    children: [
      { path: '', component: LoadingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/student', component: StudentLoginComponent },
      { path: 'reg/student', component: StudentRegComponent },

      {
        path: 'home', component: HomeComponent, children: [
          { path: '', component: CarouselComponent },
          { path: 'teachers', component: TeacherComponent },
          { path: 'teachers/:id', component: TeacherProfileComponent },
          { path: 'library', component: LiberaryComponent }
        ]
      },
      {
        path: 'admin', component: AdminComponent, children: [
          { path: '', component: AdminHomeComponent },
          { path: 'teachers', component: AdminTeachersComponent },
          { path: 'teachers/:id', component: AdminTeacherProfileComponent },
          { path: 'students', component: AdminStudentsComponent },

        ]
      },
      { path: 'admin/login', component: AdminLoginComponent },

      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: "**", redirectTo: lang }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
