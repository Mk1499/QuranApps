import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LectureService } from '../../../Services/lecture.service';
import { Lecture } from '../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { LangService } from '../../../Services/lang.service';
import { socket, WebRTCService, myPeer } from '../../../Services/webRTC.service';
import { Socket } from 'socket.io-client';
import { Call } from '../../../Models/Call.model';


@Component({
  selector: 'app-admin-lecture-live',
  templateUrl: './admin-lecture-live.component.html',
  styleUrls: ['./admin-lecture-live.component.css']
})
export class AdminLectureLiveComponent implements OnInit {

  lecture: Lecture;
  lectureSub: Subscription;
  lectureID: string;
  loading: boolean = true;
  activeLang: string = 'en';
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  socket: Socket = socket;
  myPeerID: string;

  myStream: MediaStream = new MediaStream();
  teacherStream: MediaStream;
  studentStream: MediaStream;


  constructor(
    private route: ActivatedRoute,
    private lectureSevice: LectureService,
    private langService: LangService,
    private webRTCService: WebRTCService
  ) { }

  ngOnInit(): void {

    this.lectureID = this.route.snapshot.params.id;
    this.activeLang = this.langService.getLang();
    this.getLectuerDetails();
    this.socketListener();


    if (myPeer.id) {
      this.myPeerID = myPeer.id;
      this.startMonitoring();
      console.log("(PRE) Joinning Lecture : ", this.lectureID, " with peer : ", this.myPeerID);

    } else {

      myPeer.on("open", (id) => {
        this.myPeerID = id;
        this.startMonitoring();
        console.log("Joinning Lecture : ", this.lectureID, " with peer : ", this.myPeerID);

      })
    }

  }

  getLectuerDetails() {
    this.lectureSub = this.lectureSevice.getLectureDetails(this.lectureID).subscribe((lecture: Lecture) => {
      this.lecture = lecture;
      if (lecture?.coverURL) {
        this.imageURL = this.lecture.coverURL
      }
      this.loading = false;
    })
  }

  startMonitoring() {
    this.socket.emit("adminConnected", this.lectureID, this.myPeerID);
    this.peerConf();
  }

  peerConf() {
    myPeer.on("call", call => {
      console.log("Recieve a call : ", call);

      call.answer();
      call.on('stream', stream => {
        console.log("Recieve a stream  : ", stream); // i need now to define stream source
        if (call.metadata.senderRole === "Teacher") {
          this.teacherStream = stream;
        } else {
          this.studentStream = stream;
        }
      })
    })
  }

  socketListener() {

    // teacher join to lecture after admin did
    this.socket.on("teacherJoined", (teacherPeerID) => {
      console.log("Teacher Joined : ", teacherPeerID);
      this.socket.emit('bcAdminPeerID', this.lectureID, this.myPeerID);
    })

    // student join to lecture after admin did
    this.socket.on("studentJoined", (studentPeerID) => {
      console.log("Student Joined : ", studentPeerID);
      this.socket.emit('bcAdminPeerID', this.lectureID, this.myPeerID);

    })
  }




}
