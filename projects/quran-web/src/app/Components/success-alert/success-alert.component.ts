import { Subscription } from 'rxjs';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
  animations: [
    trigger("animate", [
      state("void", style({
        top: "-7vh"
      })),
      state("show", style({
        top: "0px"
      })),
      state("hide", style({
        top: "-7vh"
      })),
      transition("show <=> void", animate(500))
      ,
      transition("show <=> hide", animate(500))
    ])
  ]
})
export class SuccessAlertComponent implements OnInit, OnDestroy {
  mode: string = "hide";
  showTimeOut;
  hideTimeOut;
  showSub: Subscription;
  @Input("msg") msg: string;
  @Output("showEmit") showEmit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    this.mode = "show"
    this.hideTimeOut = setTimeout(() => {
      this.mode = "hide"
    }, 2000)
  }

  ngOnDestroy() {
    if (this.showTimeOut)
      clearTimeout(this.showTimeOut);
    if (this.hideTimeOut) {
      clearTimeout(this.hideTimeOut)
    }
  }

}
