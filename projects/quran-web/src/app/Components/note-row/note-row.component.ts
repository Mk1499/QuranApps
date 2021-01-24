import { Note } from './../../Models/notification.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'note-row',
  templateUrl: './note-row.component.html',
  styleUrls: ['./note-row.component.css']
})
export class NoteRowComponent implements OnInit {

  @Input('note') note : Note;
  constructor() { }

  ngOnInit(): void {
  }
  noteClicked(){
    alert(`Note ${this.note.click_action} Clicked`)
  }

}
