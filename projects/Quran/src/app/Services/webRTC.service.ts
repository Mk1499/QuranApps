import { Injectable, OnInit } from '@angular/core';
import { Call } from '../Models/Call.model';
import Peer from 'peerjs';
import { io } from 'socket.io-client';
import { baseURL } from './api-call.service';
import { Subject } from 'rxjs';




export const myPeer = new Peer(undefined, {
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

    let call = await myPeer.call(callData.recieverID, callData.stream, {
      metadata: {
        senderRole: callData.senderRole || ""
      }
    });
    console.log("Call : ", call);

    call.answer(callData.stream);
    call.on('stream', (stream) => {
      this.otherStream.next(stream);
    })
  }

  joinLectureRoom(lectureID, username, role, avatar) {
    console.log("Join Room Called : ", role, this.myPeerID);

    if (!this.myPeerID) {


      myPeer.on("open", (id) => {
        this.myPeerID = id;
        if (role === "student") {
          console.log("student try to join room");

          socket.emit('studentJoin', lectureID, id, username, avatar);
          console.log("student with peer id : ", id, " and Name : ", username, " connect to room : ", lectureID);
        }
        else {
          socket.emit('teacherJoin', lectureID, id, username, avatar);
          console.log("teacher with peer id : ", id, " and Name : ", username, " connect to room : ", lectureID);

        }


      });
    } else {
      if (role === "student") {
        console.log("student try to join room");

        socket.emit('studentJoin', lectureID, this.myPeerID, username, avatar);
        console.log("student with peer id : ", this.myPeerID, " and Name : ", username, " connect to room : ", lectureID);
      }
      else {
        socket.emit('teacherJoin', lectureID, this.myPeerID, username, avatar);
        console.log("teacher with peer id : ", this.myPeerID, " and Name : ", username, " connect to room : ", lectureID);

      }
    }
  }



  async getMyPeerID() {


    return new Promise((resolve, reject) => {
      myPeer.on('open', (id) => {
        console.log("Your PeerID is : ", id);
        this.myPeerID = id;
        resolve(id)
      })
    })

  }

  recievingCallConfig() {
    // console.log("R C C Called ");

    myPeer.on('call', (call) => {
      console.log("recieving a call from another peer : ", call);
      call.answer(this.myStream);
      call.on('stream', stream => {
        console.log("recieving a stream/ from another peer : ", stream);

        this.otherStream.next(stream);
      })

    })
  }

}
