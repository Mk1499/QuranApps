import { TranslateService } from '@ngx-translate/core';
import { RouteData } from './../../Models/RouteData.model';
import { DynamicMeta } from './../../Services/dynamicMeta.service';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

export class Admin implements OnInit {

  constructor(
    private metaService: DynamicMeta,
    private translate: TranslateService
  ) { }
  ngOnInit() {
  }
}
