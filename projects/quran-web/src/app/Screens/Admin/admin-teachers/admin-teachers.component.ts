import { Subscription } from 'rxjs';
import { TeacherService } from './../../../Services/teacher.service';
import { ApiCallService } from './../../../Services/api-call.service';
import { Teacher } from './../../../Interfaces/teacher';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class AdminTeachersComponent implements OnInit, OnDestroy {

  teachers: Teacher[] = [];
  teachersCopy: Teacher[];
  addedTeachers: Teacher[] = [];

  filterName: string;
  loadTeachers: boolean = true;
  activeMode: string = "show";
  teachSub: Subscription;

  constructor(
    private api: ApiCallService,
    private teacherService: TeacherService) { }

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
    this.addedTeachers.push(teacher);

    this.activeMode = 'edit'
  }

  cancelEditMode() {
    this.teachers = this.teachersCopy;
    this.activeMode = 'show'
  }

  submitEditing() {
    this.teachersCopy = this.teachers;
    this.activeMode = 'show';
    if (this.addedTeachers.length) {
      this.teachSub = this.teacherService.addManyTeachers(this.addedTeachers).subscribe(data => {
        console.log("Teachers Added : ", data);
        this.addedTeachers = []
      })
    }
  }
  ngOnDestroy() {
    if (this.teachSub)
      this.teachSub.unsubscribe();
  }

}
