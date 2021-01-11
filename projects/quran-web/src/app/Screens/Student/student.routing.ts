import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { StudentRegComponent } from './student-reg/student-reg.component';
import { StudentLoginComponent } from './student-login/student-login.component';

import { LiberaryComponent } from './liberary/liberary.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CarouselComponent } from './../../Components/carousel/carousel.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'login', component: StudentLoginComponent },
  { path: 'signup', component: StudentRegComponent },
  {
    path: '', component: HomeComponent, children: [

      { path: 'home', component: CarouselComponent },
      { path: 'teachers', component: TeacherComponent },
      { path: 'teachers/:id', component: TeacherProfileComponent },
      { path: 'library', component: LiberaryComponent },
      { path : 'profile',component:ProfileComponent},
      { path: '**', redirectTo: 'home' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRouting { }
