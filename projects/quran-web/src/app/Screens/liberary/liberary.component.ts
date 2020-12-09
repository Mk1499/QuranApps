import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../Services/api-call.service';
@Component({
  selector: 'app-liberary',
  templateUrl: './liberary.component.html',
  styleUrls: ['./liberary.component.css']
})
export class LiberaryComponent implements OnInit {
  samples: any = [];

  constructor(private apiService: ApiCallService) { }

  ngOnInit(): void {
    this.apiService.getSamples().subscribe(t => {
      this.samples = t.samples;
      console.log("Samples : ", t);

    })

  }
}
