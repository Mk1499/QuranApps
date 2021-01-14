import { Subject, Subscription } from 'rxjs';
import { Sample } from './../Models/Sample.model';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class SampleService {

  activeSample: Sample;
  changeActiveSample = new Subject<Sample>();

  changeSample(sample: Sample) {
    this.activeSample = sample;
    this.changeActiveSample.next(this.activeSample);
  }

}
