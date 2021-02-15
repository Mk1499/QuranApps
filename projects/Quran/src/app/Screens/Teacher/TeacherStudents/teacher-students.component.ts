import { Subscription } from 'rxjs';
import { TeacherService } from '../../../Services/teacher.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../../../Models/Student.model';
import { Teacher } from '../../../Models/teacher';

@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.css']
})
export class TeacherStudentsComponent implements OnInit, OnDestroy {

  students: Student[] = [];
  stuSub: Subscription;
  teacherData: Teacher;
  loading: boolean = true;

  constructor(
    private teacher: TeacherService
  ) {
    this.teacherData = JSON.parse(localStorage.getItem('quranTeacher'));
  }


  ngOnInit(): void {
    this.stuSub = this.teacher.getTeacherStudents(this.teacherData._id).subscribe((students: Student[]) => {
      console.log("Teacher Students : ", students);

      this.students = students;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      console.log("Getting Teacher students Error  : ", err);

    })
  }

  ngOnDestroy(): void {
    if (this.stuSub) {
      this.stuSub.unsubscribe();
    }
  }

}
