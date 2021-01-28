import { VideoStream } from './../../../Models/VideoStream.model';
import { ActivatedRoute } from '@angular/router';
import { baseURL } from './../../../Services/api-call.service';
import { Component, ElementRef, OnInit, ViewChild, ContentChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import Peer from 'peerjs';



@Component({
  selector: 'app-lecture-live',
  templateUrl: './lecture-live.component.html',
  styleUrls: ['./lecture-live.component.css']
})
export class LectureLiveComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('teacherVideo') teacherVideo: ElementRef;
  myVidLoaded: boolean = false;
  studentsStreams: VideoStream[] = [];
  peerID: string;
  myStream: MediaStream;
  streamssIDs: string[] = [];
  socket: Socket;
  myPeer: Peer;

  constructor(
    private route: ActivatedRoute
  ) { }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    this.closeSession()
  }

  ngOnInit(): void {
    this.myPeer = new Peer(undefined, {
      host: "mkpeerserver.herokuapp.com",
      secure: true,
      port: 443
    });

    this.socket = io(baseURL, {
      withCredentials: true,
    });

    this.joinToLectRoom();
    this.streamAliveChecker();
  }

  ngAfterViewInit() {
    this.startStreaming();
  }
  streamAliveChecker() {
    this.socket.on("remove-stream", (streamID) => {
      this.studentsStreams = this.studentsStreams.filter(vs => vs.id != streamID)
    })
  }


  answerCallConfig() {
    this.myPeer.on('call', (call: Peer.MediaConnection) => {

      call.answer(this.myStream);
      this.callListener(call)
    })
  }

  joinToLectRoom() {
    this.myPeer.on("open", (id) => {
      this.peerID = id;
      this.socket.emit('teacher-join-room', this.route.snapshot.params.id, id);
    });
  }

  startStreaming() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      this.myStream = stream;
      this.myVideoStram(stream);
      this.streamssIDs.push(stream.id)
      this.answerCallConfig();
      this.socket.on('new-student', (studntID, studentName) => {
        this.sendMyVideo(stream, studntID, studentName);
        if (this.peerID)
          this.socket.emit("lecture-teacher-id", this.peerID, this.route.snapshot.params.id)
      })

    })
  }

  myVideoStram(stream) {
    let video = this.teacherVideo.nativeElement;
    video.muted = true;
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
      this.myVidLoaded = true;
    })
  }

  callListener(call: Peer.MediaConnection, mode = "startFromStudent") {

    call.on('stream', (studentStream: MediaStream) => {

      if (!this.streamssIDs.includes(studentStream.id)) {
        this.streamssIDs.push(studentStream.id)


        let newVid: VideoStream = {
          id: call.peer,
          ownerName: mode === "startFromTeacher" ? call.metadata?.recieverName : call.metadata?.callerName || "Student",
          streamData: studentStream
        }
        this.studentsStreams.push(newVid);
      }
    });
    call.on("close", () => {
      alert("Call closed")
      this.teacherVideo.nativeElement.remove();
    })
    call.on("error", () => {
      alert("Call Error")
      this.teacherVideo.nativeElement.remove();
    })
  }

  sendMyVideo(stream, studntID, studentName) {
    const call = this.myPeer.call(studntID, stream, {
      metadata: {
        callerName: "Teacher",
        recieverName: studentName
      }
    });
    call.answer(this.myStream);

    this.callListener(call, "startFromTeacher")
  }

  ngOnDestroy() {
    this.closeSession()
  }

  stopStreaming() {
    this.myStream.getTracks().forEach(track => {
      track.stop();
    })
  }

  closeSession() {
      this.stopStreaming()
      this.socket.emit("teacher-quite", this.peerID, this.route.snapshot.params.id)
  }


}
