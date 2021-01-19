import { LoadingComponent } from './Components/loading/loading.component';
import { SplashComponent } from './Screens/splash/splash.component';
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
      { path: 'admin', loadChildren: () => import('./Screens/Admin/admin.module').then(m => m.AdminModule) },
      { path: 'student', loadChildren: () => import('./Screens/Student/student.module').then(m => m.StudentModule) },
      { path: 'teacher', loadChildren: () => import('./Screens/Teacher/teacher.module').then(m => m.TeacherModule) },
    ]
  },
  {
    path: 'en', component: SplashComponent,
    children: [
      { path: '', component: LoadingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', loadChildren: () => import('./Screens/Admin/admin.module').then(m => m.AdminModule) },
      { path: 'student', loadChildren: () => import('./Screens/Student/student.module').then(m => m.StudentModule) },
      { path: 'teacher', loadChildren: () => import('./Screens/Teacher/teacher.module').then(m => m.TeacherModule) },
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
