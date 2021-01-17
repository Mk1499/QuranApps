import { SharedModule } from './shared/shared.module';
import { ThemesService } from './Services/themes.service';
import { AuthService } from './Services/auth.service';
import { LangService } from './Services/lang.service';
import { ApiCallService } from './Services/api-call.service';
import { MessagingService } from './Services/messaging.service';

import { FormsModule } from '@angular/forms';
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
import {StoreModule} from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Screens/login/login.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './shared/loaders/translate-browser.loader';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SplashComponent } from './Screens/splash/splash.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { IonicModule } from '@ionic/angular';

import * as fromApp from './Store/app.reducer';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    SplashComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TransferHttpCacheModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [
    ApiCallService,
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
