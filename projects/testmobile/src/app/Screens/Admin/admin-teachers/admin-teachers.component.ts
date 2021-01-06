import { ApiCallService } from './../../../Services/api-call.service';
import { Teacher } from './../../../Interfaces/teacher';
import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({
        opacity: 0
      })),

      // transition('void => *',[
      //   animate(1000)
      // ]) ,
      transition('* <=> void', [
        animate(1000)
      ])
    ]),
  ]
})
export class AdminTeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  teachersCopy: Teacher[];
  filterName: string;
  loadTeachers: boolean = true;
  activeMode: string = "show";

  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.api.getTeachers().subscribe(data => {
      this.loadTeachers = false;
      this.teachersCopy = data.teachers;
      this.teachers = data.teachers;
    })
  }

  filterTeacehers() {
    if (this.filterName) {
      this.teachers = this.teachers.filter(t => {
        return t.name.toLocaleLowerCase().includes(this.filterName.toLocaleLowerCase()) ||
          t.arName.toLocaleLowerCase().includes(this.filterName.toLocaleLowerCase());
      })
    }
    else {
      this.teachers = this.teachersCopy;
    }
  }

  changeMode(mode) {
    this.activeMode = mode;
  }

  deleteTeacher(id) {
    this.teachers = this.teachers.filter(t => t._id !== id);
  }


  addPressed() {
    // alert('clicked')
    this.activeMode = "addTeacher"
  }

  addTeacher(teacher) {
    console.log("Received teacher : ", teacher);

    this.teachers.push(teacher);

    this.activeMode = 'edit'
  }

  cancelEditMode() {
    this.teachers = this.teachersCopy;
    this.activeMode = 'show'
  }

  submitEditing() {
    this.teachersCopy = this.teachers;
    this.activeMode = 'show';
  }


}
