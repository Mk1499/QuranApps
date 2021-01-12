import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sample',
  templateUrl: './AddSample.component.html',
  styleUrls: ['./AddSample.component.css']
})
export class AddSampleComponent implements OnInit {

   name:string;
   arName:string;
   duration:string;
   ayatNums:string;
   avatar:string;
   joz2:string;
   audioURL:string;

  constructor() { }

  ngOnInit(): void {
  }

}
