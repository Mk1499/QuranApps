import { LangService } from './../../../Services/lang.service';
import { TeacherService } from './../../../Services/teacher.service';
import { TranslateService } from '@ngx-translate/core';
import { ApiCallService } from './../../../Services/api-call.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from "@angular/core";
import { Sample } from '../../../Models/Sample.model';

@Component({
  selector: 'app-teacher-samples',
  templateUrl: './TeacherSamples.component.html',
  styleUrls: ["./TeacherSamples.component.css"]
})

export class TeacherSamples implements OnInit {

  samples: any = [];
  addDirection: string = "right";

  constructor(
    private teacher: TeacherService,
    private title: Title,
    private translate: TranslateService,
    private lang: LangService
  ) { }

  ngOnInit(): void {
    let teacher = JSON.parse(localStorage.getItem("quranTeacher"));
    this.teacher.getTeacherSamples(teacher._id).subscribe((s: Sample[]) => {
      this.samples = s;
      console.log("Samples : ", s);
    })
    this.translate.get('library').subscribe(t => this.title.setTitle(t))
    console.log("LAng : ",this.lang.urlLang);

    if (this.lang.urlLang == "en") {
      this.addDirection = "right";
    } else {
      this.addDirection = "left"
    }



  }
}
