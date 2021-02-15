import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'comp-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input('itemName') itemName;
  @Output('addAction') addAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addAction.emit();
  }

}
