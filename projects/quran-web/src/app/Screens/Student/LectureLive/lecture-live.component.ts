import { ActivatedRoute } from '@angular/router';
import { baseURL } from './../../../Services/api-call.service';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import Peer from 'peerjs';

const socket = io(baseURL, {
  withCredentials: true,
});

const myPeer = new Peer(undefined, {

  host: "mkpeerserver.herokuapp.com",
  secure: true,
  port: 443
});

@Component({
  selector: 'app-lecture-live',
  templateUrl: './lecture-live.component.html',
  styleUrls: ['./lecture-live.component.css']
})
export class LectureLiveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("emitting");

    myPeer.on("open", (id) => {
      console.log("your user id : ", id);
      socket.emit('join-room', this.route.snapshot.params.id, id)
    });
  }

}
