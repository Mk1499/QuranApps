import { Injectable, OnInit } from '@angular/core';
import { Call } from '../Models/Call.model';
import Peer from 'peerjs';
import { io } from 'socket.io-client';
import { baseURL } from './api-call.service';
import { Subject } from 'rxjs';




const myPeer = new Peer(undefined, {
  host: "mkpeerserver.herokuapp.com",
  secure: true,
  port: 443
})


export const socket = io(baseURL, {
  withCredentials: true,
});

@Injectable({
  providedIn: 'root'
})
export class WebRTCService implements OnInit {

  myPeerID: string;
  myStream: MediaStream = new MediaStream([]);
  otherStream = new Subject<MediaStream>()


  constructor() {

  }


  ngOnInit() {
  }


  async makeACall(callData: Call) {
    console.log("Making a call To : ", callData.recieverID, "with stream : ", callData.stream);

    let call = await myPeer.call(callData.recieverID, callData.stream);
    console.log("Call : ", call);

    call.answer(callData.stream);
    call.on('stream', (stream) => {
      this.otherStream.next(stream);
    })
  }

  joinLectureRoom(lectureID, username, role, avatar) {
    myPeer.on("open", (id) => {
      this.myPeerID = id;
      if (role === "student")
        socket.emit('studentJoin', lectureID, id, username, avatar);
      else
        socket.emit('teacherJoin', lectureID, id, username, avatar);

      console.log("student with peer id : ", id, " and Name : ", username, " connect to room : ", lectureID);

    });
  }

  getMyPeerID() {
    return this.myPeerID;
  }

  recievingCallConfig() {
    console.log("R C C Called ");

    myPeer.on('call', (call) => {
      console.log("recieving a call from another peer : ", call);
      call.answer(this.myStream);
      call.on('stream', stream => {
        console.log("recieving a stream from another peer : ", stream);

        this.otherStream.next(stream);
      })

    })
  }







}
