import { Teacher } from '../../Models/teacher';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comp-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.css']
})
export class AddTeacherFormComponent implements OnInit {
  name: string;
  arName: string;
  email: string;
  password: string;
  avatar: string;
  price: string;

  errMsg: string;

  formClass: string = "animate__backInDown";

  @Output('teacherSubmited') teacherSubmited = new EventEmitter<Teacher>();
  @Output('hideForm') cancelForm = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addTeacher() {
    let { price, name, email, password, avatar, arName } = this;

    if (!name)
      this.errMsg = "Sorry but Teacher Name is Required";
    else if (!password) {
      this.errMsg = "Sorry but Teacher Password is Required";
    }
    else if (!arName) {
      this.errMsg = "Sorry but Teacher arName is Required";
    }
    else if (!avatar) {
      this.errMsg = "Sorry but Teacher Avatar is Required";
    }
    else if (!price) {
      this.errMsg = "Sorry but Teacher Price is Required";
    }
    else if (!email) {
      this.errMsg = "Sorry but Teacher Email is Required";
    }
    else {
      let teacher: Teacher = {
        name,
        email,
        password,
        avatar,
        arName,
        price
      }
      this.errMsg = "";
      this.teacherSubmited.emit(teacher);
      this.hideForm()
    }
  }

  hideForm() {
    this.formClass = "animate__backOutUp";
    setTimeout(() => {

      this.cancelForm.emit();
    }, 500)
  }

}
