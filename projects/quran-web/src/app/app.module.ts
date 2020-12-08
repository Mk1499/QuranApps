import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Screens/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Screens/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { TeacherComponent } from './Screens/teacher/teacher.component';
import { TeacherCardComponent } from './Components/teacher-card/teacher-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    TeacherComponent,
    TeacherCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
