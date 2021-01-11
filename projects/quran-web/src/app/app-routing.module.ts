import { ProfileComponent } from './Screens/Student/profile/profile.component';
import { StudentRegComponent } from './Screens/Student/student-reg/student-reg.component';
import { StudentLoginComponent } from './Screens/Student/student-login/student-login.component';
import { LoadingComponent } from './Components/loading/loading.component';
// import { HomeComponent } from './Screens/Student/home/home.component';
import { SplashComponent } from './Screens/splash/splash.component';
import { TeacherProfileComponent } from './Screens/Student/teacher-profile/teacher-profile.component';
import { LiberaryComponent } from './Screens/Student/liberary/liberary.component';
import { TeacherComponent } from './Screens/Student/teacher/teacher.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LoginComponent } from './Screens/login/login.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const lang = localStorage.getItem('lang') || 'en';



console.log("LAng : ", lang);


const routes: Routes = [
  {
    path: 'ar', component: SplashComponent,
    children: [
      { path: '', component: LoadingComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'login/student', component: StudentLoginComponent },
      // { path: 'reg/student', component: StudentRegComponent },
      // {
      //   path: 'home', component: HomeComponent, children: [
      //     { path: '', component: CarouselComponent },
      //     { path: 'teachers', component: TeacherComponent },
      //     { path: 'teachers/:id', component: TeacherProfileComponent },
      //     { path: 'library', component: LiberaryComponent },

      //   ]
      // },
      { path: 'admin', loadChildren: () => import('./Screens/Admin/admin.module').then(m => m.AdminModule) },
      {
        path: 'student', loadChildren: () => import('./Screens/Student/student.module').then(m => m.StudentModule)
      },
    ]
  },
  {
    path: 'en', component: SplashComponent,
    children: [
      { path: '', component: LoadingComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'login/student', component: StudentLoginComponent },
      // { path: 'reg/student', component: StudentRegComponent },
      // {
      //   path: 'home', component: HomeComponent, children: [
      //     { path: '', component: CarouselComponent },
      //     { path: 'teachers', component: TeacherComponent },
      //     { path: 'teachers/:id', component: TeacherProfileComponent },
      //     { path: 'library', component: LiberaryComponent },

      //   ]
      // },
      { path: 'admin', loadChildren: () => import('./Screens/Admin/admin.module').then(m => m.AdminModule) },
      { path: 'student', loadChildren: () => import('./Screens/Student/student.module').then(m => m.StudentModule) },

    ]
  },
  { path: "**", redirectTo: lang }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
