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
import { AppComponent } from './app.component';
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
      { path: 'profile', component: ProfileComponent },
      { path: "**", redirectTo: lang }
    ]
  }
]

@NgModule({
      imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
      })],
      exports: [RouterModule]
    })
export class AppRoutingModule {
}
