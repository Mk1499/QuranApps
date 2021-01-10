import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './../../shared/loaders/shared.module';
import { AddTeacherFormComponent } from './../../Components/add-teacher-form/add-teacher-form.component';
import { SideBarComponent } from './../../Components/side-bar/side-bar.component';
import { LogoComponent } from './../../Components/logo/logo.component';
import { AdminRouting } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Admin } from './admin.component';
import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './login/login.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeacherProfileComponent } from './admin-teacher-profile/admin-teacher-profile.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddItemComponent } from 'projects/testmobile/src/app/Components/add-item/add-item.component';
import { ChartsModule } from 'ng2-charts';
import { translateBrowserLoaderFactory } from 'projects/booky-copy/src/app/shared/loaders/translate-browser.loader';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    Admin,
    AdminLoginComponent,
    AdminStudentsComponent,
    AdminTeacherProfileComponent,
    AdminTeachersComponent,
    AdminComponent,
    AdminHomeComponent,
    LogoComponent,
    SideBarComponent,
    AddTeacherFormComponent,
    AddItemComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    AdminRouting,
    ChartsModule,
    SharedModule,
    ReactiveFormsModule
  ],
})


export class AdminModule {

}
