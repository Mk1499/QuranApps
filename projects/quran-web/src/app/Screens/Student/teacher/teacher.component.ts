import { DynamicMeta } from './../../../Services/dynamicMeta.service';
import { RouteData } from './../../../Models/RouteData.model';
import { Title } from '@angular/platform-browser';
import { ApiCallService } from '../../../Services/api-call.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: any = [];
  mode: string;

  constructor(private apiService: ApiCallService, private title: Title, private translate: TranslateService,
    private metaService: DynamicMeta
  ) { }

  ngOnInit(): void {

    this.apiService.getTeachers().subscribe(t => {
      this.teachers = t.teachers;
    });
    this.translate.get('teachers').subscribe(t => {
      this.title.setTitle(t)
    })

    let metaData: RouteData = {
      title: "All Teachers",
      description: "Student Can Browse All Teachers",
    }
    this.metaService.updateTags(metaData)
  }

}
