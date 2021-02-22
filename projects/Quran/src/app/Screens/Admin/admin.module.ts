import { AddItemComponent } from '../../Components/add-item/add-item.component';
import { SharedModule } from '../../shared/shared.module';
import { AddTeacherFormComponent } from '../../Components/add-teacher-form/add-teacher-form.component';
import { SideBarComponent } from '../../Components/side-bar/side-bar.component';
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
import { ChartsModule } from 'ng2-charts';
import { AdminLecturesComponent } from './admin-lectures/admin-lectures.component';
import { AdminLectureLiveComponent } from './admin-lecture-live/admin-lecture-live.component';




@NgModule({
  declarations: [
    Admin,
    AdminLoginComponent,
    AdminStudentsComponent,
    AdminTeacherProfileComponent,
    AdminTeachersComponent,
    AdminComponent,
    AdminHomeComponent,
    SideBarComponent,
    AddTeacherFormComponent,
    AddItemComponent,
    AdminLecturesComponent,
    AdminLectureLiveComponent,
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
