import { DynamicMeta } from '../../../Services/dynamicMeta.service';
import { RouteData } from '../../../Models/RouteData.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {

  constructor(
    private metaService: DynamicMeta
  ) { }

  ngOnInit(): void {

    let data : RouteData = {
      title : "Conrolling Students",
      description: "Here you can Add and Remove Students"
    }
    this.metaService.updateTags(data);
  }

}
