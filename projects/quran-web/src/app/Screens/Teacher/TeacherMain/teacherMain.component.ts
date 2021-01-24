import { LangService } from './../../../Services/lang.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacherMain.component.html'
})

export class TeacherMainComponent implements OnInit {
  direction: string;
  constructor(
    private lang: LangService
  ) {
    console.log("Home Called");

  }
  ngOnInit() {
    console.log("URL Lang : ",this.lang.getLang());

    if (this.lang.getLang() === "ar") {
      this.direction = "rtl";
    } else {
      this.direction = "ltr";
    }
  }
}
