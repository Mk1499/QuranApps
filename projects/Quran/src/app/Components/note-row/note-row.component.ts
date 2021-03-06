import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../../Models/notification.model';
import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment'


@Component({
  selector: 'note-row',
  templateUrl: './note-row.component.html',
  styleUrls: ['./note-row.component.css']
})
export class NoteRowComponent implements OnInit {

  @Input('note') note: Note;
  time: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.time = moment(new Date(+this.note.date)).fromNow();
  }
  noteClicked() {
    // alert(`Note ${this.note.click_action} Clicked`)
    let clickArr = this.note.click_action.split("/");
    let url = `./${clickArr[0]}`;
    console.log("URL : ", url);

    this.router.navigate([url, clickArr[1]], {
      relativeTo: this.route
    })
    console.log("Clicked Note : ", clickArr);
  }

}
