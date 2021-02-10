import { Teacher } from './../../../Models/teacher';
import { LangService } from './../../../Services/lang.service';
import { Title } from '@angular/platform-browser';
import { LectureService } from './../../../Services/lecture.service';
import { Lecture } from './../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { Student } from './../../../Models/Student.model';
import { VideoStream } from './../../../Models/VideoStream.model';
import { ActivatedRoute, Router } from '@angular/router';
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
  myPeer: Peer;
  socket: Socket;
  lectSub: Subscription;
  lectureData: Lecture;
  loading: boolean = true;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  activeLang: string = 'ar';
  myData: Teacher;
  endingLecture: boolean = false;
  changeMode: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lectureService: LectureService,
    private title: Title,
    private lang: LangService
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

    this.myData = JSON.parse(localStorage.getItem("quranTeacher"));
    this.checkAuthorize();

    this.activeLang = this.lang.getLang();
  }


  endLecture() {

    this.endingLecture = true;
    let lectureID = this.route.snapshot.params.id;
    this.socket.emit('finish-lecture', lectureID);

    this.lectureService.finishLecture(lectureID).subscribe(res => {
      this.endingLecture = false;
      this.router.navigate(['../'], {
        relativeTo: this.route
      })
    })
  }

  ngAfterViewInit() {
    this.startStreaming();
  }
  streamAliveChecker() {
    this.socket.on("remove-stream", (streamID) => {
      this.studentsStreams = this.studentsStreams.filter(vs => vs.id != streamID)
    })
  }
  checkAuthorize() {
    this.lectSub = this.lectureService.getLectureDetails(this.route.snapshot.params.id).subscribe((lecData: Lecture) => {
      console.log("LECT DATA : ", lecData);
      this.lectureData = lecData;
      if (lecData?.coverURL) {
        this.imageURL = lecData.coverURL
      }
      if (this.lectureData.teacher._id !== this.myData._id) {
        alert("Sorry but you aren't a lecture's Teacher");
        this.router.navigate(['../'], {
          relativeTo: this.route
        })
      } else {
        this.loading = false;
        this.title.setTitle(this.lectureData.name);
        this.joinToLectRoom();
        this.streamAliveChecker();
      }
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

    }).catch(err => {

      alert(err)
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

  openChangeAlert() {
    this.changeMode = true;
  }
  closeChangeAlert(changedAya) {
    this.changeMode = false;
    console.log("Changed Aya : ", changedAya);
    if (changedAya) {
      this.lectureData.aya = changedAya;
      this.socket.emit("teacherChangeAya", this.lectureData._id, changedAya)
    }

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
