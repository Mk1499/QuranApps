import { LangService } from './../../../Services/lang.service';
import { SuccessAlertComponent } from './../../../Components/success-alert/success-alert.component';
import { Subscription } from 'rxjs';
import { TeacherService } from './../../../Services/teacher.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sample } from '../../../Models/Sample.model';

@Component({
  selector: 'app-add-sample',
  templateUrl: './AddSample.component.html',
  styleUrls: ['./AddSample.component.css']
})
export class AddSampleComponent implements OnInit, OnDestroy {

  name: string = "";
  arName: string = "";
  duration: number = null;
  noOfAyat: number = null;
  avatar: string = "";
  joz2: string = "";
  url: string = "";
  addSampleSub: Subscription;
  loading: boolean = false;
  user;
  errorFields: string[] = []
  errMsg: string = "";

  @ViewChild('successAlert') successAlert: SuccessAlertComponent;

  constructor(
    private teacher: TeacherService,
    private lang: LangService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("quranTeacher");
  }

  onSubmit(formData: NgForm) {
    let sample: Sample = formData.form.value;
    this.loading = true;
    this.errorFields = [];
    sample['teacher'] = JSON.parse(this.user)?._id;
    // this.showSuccess = true;

    if (formData.valid)
      this.addSampleSub = this.teacher.addSample(sample).subscribe(sample => {
        this.loading = false;
        this.successAlert.showAlert();
        formData.resetForm();
        this.errMsg = "";
      })
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

  ngOnDestroy(): void {
    if (this.addSampleSub) {
      this.addSampleSub.unsubscribe()
    }
  }

}
