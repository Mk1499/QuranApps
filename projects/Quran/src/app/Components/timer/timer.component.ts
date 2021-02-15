import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input('date') targetDate;
  remain: string;
  done: boolean = false;
  interval;
  constructor() { }

  ngOnInit(): void {
    this.targetDate = new Date(this.targetDate).getTime();
    this.countDown();
    console.log("target Date : ",this.targetDate);

  }

  countDown() {
    this.interval = setInterval(() => {

      let now = new Date().getTime();

      let distance = this.targetDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.remain = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(this.interval);
        this.done = true;
      }


    }, 1000)
  }

}
