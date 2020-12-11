import { AuthService } from './Services/auth.service';
import { LangService } from './Services/lang.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiCallService } from './Services/api-call.service';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './shared/loaders/translate-browser.loader';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SplashComponent } from './Screens/splash/splash.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { StudentLoginComponent } from './Screens/student-login/student-login.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    TeacherProfileComponent,
    SplashComponent,
    LoadingComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    TransferHttpCacheModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    })
  ],
  providers: [ApiCallService,LangService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
