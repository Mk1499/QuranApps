import { RouteData } from '../../../Models/RouteData.model';
import { TranslateService } from '@ngx-translate/core';
import { DynamicMeta } from '../../../Services/dynamicMeta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private metaService: DynamicMeta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    let data: RouteData = {
      title: "Admin Dashboard",
      description: ' admin panel you can view your students and teachers also you can add or remove teachers in conclusion you have a full control from all app also you can see a charts for app ',
      robots: 'admin,quran,student,teacher,learn,muslim'
    }
    this.metaService.updateTags(data);
  }

}
