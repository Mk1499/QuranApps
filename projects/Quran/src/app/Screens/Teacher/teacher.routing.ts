import { LectureLiveComponent } from './LectureLive/lecture-live.component';
import { LectureDetailsComponent } from './LectureDetails/lecture-details.component';
import { AddLectureComponent } from './AddLecture/add-lecture.component';
import { TeacherLecturesComponent } from './TeacherLectures/teacher-lectures.component';
import { AddSampleComponent } from './AddSample/AddSample.component';
import { TeacherStudentsComponent } from './TeacherStudents/teacher-students.component';
import { TeacherSamples } from './TeacherSamples/TeacherSamples.component';
import { TeacherHomeComponent } from './TeacherHome/teacherHome.component';
import { TeacherMainComponent } from './TeacherMain/teacherMain.component';
import { TeacherLoginComponent } from './TeacherLogin/teacherLogin.component';
import { TeacherEnrollsComponent } from './TeacherEnrolls/TeacherEnrolls.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherGuard } from '../../Guards/Teacher.guard';
import { QuranComponent } from './Quran/quran.component';


const routes: Routes = [
  { path: 'login', component: TeacherLoginComponent },
  {
    path: '', component: TeacherMainComponent, children: [
      { path: 'home', component: TeacherHomeComponent },
      { path: 'library', component: TeacherSamples },
      { path: 'library/add', component: AddSampleComponent },
      { path: 'students', component: TeacherStudentsComponent },
      { path: 'enrolls', component: TeacherEnrollsComponent },
      { path: 'lectures', component: TeacherLecturesComponent },
      { path: 'assignaya/:lectureid', component: QuranComponent },
      { path: 'lectures/add', component: AddLectureComponent },
      { path: 'lectures/:id', component: LectureDetailsComponent },
      { path: 'lectures/:id/live', component: LectureLiveComponent },
      { path: '**', redirectTo: 'home' }
    ],
    canActivate: [TeacherGuard]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TeacherRouting { }
