import { TeacherProfileComponent } from './Screens/teacher-profile/teacher-profile.component';
import { LiberaryComponent } from './Screens/liberary/liberary.component';
import { TeacherComponent } from './Screens/teacher/teacher.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { HomeComponent } from './Screens/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Screens/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',component:CarouselComponent},
    {path:'teachers',component:TeacherComponent},
    {path:'teachers/:id',component:TeacherProfileComponent},
    {path:'library',component:LiberaryComponent}
  ]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
