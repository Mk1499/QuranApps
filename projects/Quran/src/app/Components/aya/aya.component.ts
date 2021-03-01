import { Component, OnInit, Input } from '@angular/core';
import { Aya } from '../../Models/Aya.model';

@Component({
  selector: 'app-aya',
  templateUrl: './aya.component.html',
  styleUrls: ['./aya.component.css']
})
export class AyaComponent implements OnInit {

  @Input("aya") aya: Aya;
  @Input("index") index: number;
  @Input('active') active: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
