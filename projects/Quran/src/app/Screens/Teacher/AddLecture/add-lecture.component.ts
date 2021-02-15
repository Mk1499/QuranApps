import { Router } from '@angular/router';
import { LangService } from '../../../Services/lang.service';
import { SuccessAlertComponent } from '../../../Components/success-alert/success-alert.component';
import { TeacherService } from '../../../Services/teacher.service';
import { Subscription } from 'rxjs';
import { Lecture } from '../../../Models/Lecture.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddLectureComponent implements OnInit, OnDestroy {


  name: string;
  arName: string;
  coverURL: string;
  description: string;
  time: Date;
  errorFields: string[] = [];
  duration: number;
  errMsg: string = "";
  loading: boolean = false;
  user;
  addLectureSub: Subscription;
  showTime: Date;


  @ViewChild('successAlert') successAlert: SuccessAlertComponent;

  constructor(
    private teacherServcie: TeacherService,
    private lang: LangService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("quranTeacher");
  }

  onSubmit(formData: NgForm) {
    let lecture: Lecture = formData.form.value;
    console.log(formData.form.value);

    this.loading = true;
    this.errorFields = [];
    lecture['teacher'] = JSON.parse(this.user)?._id;
    // this.showSuccess = true;

    if (formData.valid) {
      lecture['time'] = this.showTime.toISOString();
      this.addLectureSub = this.teacherServcie.addLecture(lecture).subscribe(sample => {
        this.loading = false;
        this.successAlert.showAlert();
        formData.resetForm();
        this.errMsg = "";
        this.location.back();

      })
    }
    else {
      this.loading = false;
      this.errMsg = this.lang.urlLang === "en" ? "Please Complete Required Feilds" : "من فضلك اكمل باقي الحقول"
      let controls = Object.keys(formData.controls);
      for (let item of controls) {
        if (formData.controls[item].invalid) {
          this.errorFields.push(item)
        }
      }

    }
  }

  logDate() {
    this.showTime = new Date(this.time);
    console.log(this.time);
    console.log(this.showTime.toISOString());
  }

  ngOnDestroy() {
    if (this.addLectureSub) {
      this.addLectureSub.unsubscribe();
    }
  }

}
