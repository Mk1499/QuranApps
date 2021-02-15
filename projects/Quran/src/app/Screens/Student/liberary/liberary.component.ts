import { DynamicMeta } from '../../../Services/dynamicMeta.service';
import { RouteData } from '../../../Models/RouteData.model';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../../Services/api-call.service';
@Component({
  selector: 'app-liberary',
  templateUrl: './liberary.component.html',
  styleUrls: ['./liberary.component.css']
})
export class LiberaryComponent implements OnInit {
  samples: any = [];

  constructor(private apiService: ApiCallService,
              private title:Title,
              private translate:TranslateService,
              private metaService:DynamicMeta
    ) { }

  ngOnInit(): void {
    this.apiService.getSamples().subscribe(t => {
      this.samples = t.samples;
      console.log("Samples : ", t);
    })
    this.translate.get('library').subscribe(t => this.title.setTitle(t))


    let metaData : RouteData = {
      title:"All App Samples",
      description: "Here You can browse all application  samples and listen to it",
    }
    this.metaService.updateTags(metaData)

  }
}
