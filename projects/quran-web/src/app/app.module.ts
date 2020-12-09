import { ApiCallService } from './Services/api-call.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Screens/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Screens/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { TeacherComponent } from './Screens/teacher/teacher.component';
import { TeacherCardComponent } from './Components/teacher-card/teacher-card.component';
import { LiberaryComponent } from './Screens/liberary/liberary.component';
import { SampleCardComponent } from './Components/sample-card/sample-card.component';
import { TeacherProfileComponent } from './Screens/teacher-profile/teacher-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    TeacherComponent,
    TeacherCardComponent,
    LiberaryComponent,
    SampleCardComponent,
    TeacherProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
