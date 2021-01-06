import { AdminLoginComponent } from './Screens/Admin/login/login.component';
import { ThemesService } from './Services/themes.service';
import { AuthService } from './Services/auth.service';
import { LangService } from './Services/lang.service';
import { ApiCallService } from './Services/api-call.service';
import { MessagingService } from './Services/messaging.service';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule, TransferState, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AsyncPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';


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
import { StudentRegComponent } from './Screens/student-reg/student-reg.component';
import { ProfileComponent } from './Screens/profile/profile.component';
import { AdminComponent } from './Screens/Admin/admin/admin.component';
import { AdminHomeComponent } from './Screens/Admin/admin-home/admin-home.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { AdminTeachersComponent } from './Screens/Admin/admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './Screens/Admin/admin-students/admin-students.component';
import { AdminTeacherProfileComponent } from './Screens/Admin/admin-teacher-profile/admin-teacher-profile.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { AddTeacherFormComponent } from './Components/add-teacher-form/add-teacher-form.component';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './Components/logo/logo.component';


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
    StudentLoginComponent,
    StudentRegComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminHomeComponent,
    SideBarComponent,
    AdminTeachersComponent,
    AdminStudentsComponent,
    AdminTeacherProfileComponent,
    AddItemComponent,
    AddTeacherFormComponent,
    LogoComponent,
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
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    ChartsModule
  ],
  providers: [ApiCallService,
    LangService,
    AuthService,
    ThemesService,
    Title,
    Meta,
    MessagingService,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
