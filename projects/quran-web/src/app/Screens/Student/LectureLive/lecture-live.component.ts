import { Student } from './../../../Models/Student.model';
import { VideoStream } from './../../../Models/VideoStream.model';
import { ActivatedRoute } from '@angular/router';
import { baseURL } from './../../../Services/api-call.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { io } from 'socket.io-client';
import Peer from 'peerjs';





@Component({
  selector: 'app-lecture-live',
  templateUrl: './lecture-live.component.html',
  styleUrls: ['./lecture-live.component.css']
})
export class LectureLiveComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("teacherVideo") teacherVideo: ElementRef;
  teacherVidLoaded: boolean = false;
  teacherID: string;
  studentsStreams: VideoStream[] = [];
  myStream: MediaStream;
  myData: Student;
  streamssIDs: string[] = [];
  myPeerID: string;
  navData;
  myPeer;
  socket;


  constructor(
    private route: ActivatedRoute
  ) { }

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
    this.myData = JSON.parse(localStorage.getItem("quranUser"));
  }

  @HostListener('window:beforeunload',  ['$event'])
  unloadHandler() {
      // Your logic on beforeunload
      // this.closeSession()
      alert("Work")
  }


  ngAfterViewInit() {
    // check if teacher joined after me
    this.socket.on('new-teacher', (teacherID: string) => {
      // this.teacherID = teacherID;
      let call = this.myPeer.call(teacherID, this.myStream, {
        metadata: {
          callerName: this.myData.name || "NEW Student"
        }
      });
      this.streamTeacherVideo(call);
    })

    // Recieve lecture's teacher id (if I joined after teacher)
    this.socket.on('define-teacher-id', (teacherID: string) => {
      this.teacherID = teacherID;
    })
    this.startCallListener();
    this.startStreaming();
  }


  //  let other lecture teammate know my peer id
  joinToLectRoom() {
    this.myPeer.on("open", (id) => {
      this.myPeerID = id;
      this.socket.emit('student-join-room', this.route.snapshot.params.id, id, this.myData?.name);
    });
  }

  streamAliveChecker() {
    this.socket.on("remove-stream", (streamID) => {
      this.studentsStreams = this.studentsStreams.filter(vs => vs.id != streamID)
    })
  }

  // answerCallConfig() {
  //   this.myPeer.on('call', (call: Peer.MediaConnection) => {

  //     call.answer(this.myStream);
  //     this.callListener(call)
  //   })
  // }

  startCallListener() {
    this.myPeer.on('call', (call: Peer.MediaConnection) => {

      if (call.peer === this.teacherID || call.metadata.callerName === "Teacher") {
        this.streamTeacherVideo(call);
      } else {

        call.answer(this.myStream);
        this.callListener(call)

      }
    })
  }

  startStreaming() {

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      // this.myVideoStram(stream);
      this.streamssIDs.push(stream.id);
      let newVidStream: VideoStream = {
        ownerName: "YOU",
        streamData: stream
      }
      this.myStream = stream;
      this.studentsStreams.push(newVidStream);
      // this.answerCallConfig();
      this.socket.on('new-student', (studentID, studentName) => {
        this.sendMyVideo(studentID, studentName);
      })
    })
  }


  callListener(call: Peer.MediaConnection, mode = "startFromOther") {

    call.on('stream', (studentStream: MediaStream) => {

      if (!this.streamssIDs.includes(studentStream.id)) {
        this.streamssIDs.push(studentStream.id)


        let newVid: VideoStream = {
          id: call.peer,
          ownerName: mode === "startFromMe" ? call.metadata?.recieverName : call.metadata?.callerName || "Student",
          streamData: studentStream
        }
        this.studentsStreams.push(newVid);
      }
    });
    call.on("close", () => {

      this.studentsStreams = this.studentsStreams.filter(vs => vs.id != call.peer)
    })
    call.on("error", () => {
      this.studentsStreams = this.studentsStreams.filter(vs => vs.id != call.peer)

    })
  }

  streamTeacherVideo(call: Peer.MediaConnection) {

    this.teacherVidLoaded = true;
    call.answer(this.myStream);
    call.on('stream', (stream: MediaStream) => {
      let teacherVideo = this.teacherVideo.nativeElement;
      teacherVideo.srcObject = stream;
      this.streamssIDs.push(stream.id);
      // teacherVideo.muted = true;
      teacherVideo.addEventListener("loadedmetadata", () => {
        teacherVideo.play();
      });
      call.on('close', () => {
        // this.teacherVideo.nativeElement.remove();
        this.teacherVidLoaded = false;
      })
    })
  }

  sendMyVideo(studentID, studentName) {

    const call = this.myPeer.call(studentID, this.myStream, {
      metadata: {
        callerName: this.myData.name || "NEW Student",
        recieverName: studentName
      }
    });
    call.answer(this.myStream);

    this.callListener(call, "startFromMe")
  }



  ngOnDestroy() {
    this.closeSession();
  }

  stopStreaming() {
    this.myStream.getTracks().forEach(track => {
      track.stop();
    })
  }

  closeSession() {

      this.stopStreaming()
      this.socket.emit("student-quite", this.myPeerID, this.route.snapshot.params.id)
  }


}
