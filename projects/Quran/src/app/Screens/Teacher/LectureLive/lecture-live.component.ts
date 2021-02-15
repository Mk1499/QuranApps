import { Teacher } from '../../../Models/teacher';
import { LangService } from '../../../Services/lang.service';
import { Title } from '@angular/platform-browser';
import { LectureService } from '../../../Services/lecture.service';
import { Lecture } from '../../../Models/Lecture.model';
import { Subscription } from 'rxjs';
import { Student } from '../../../Models/Student.model';
import { VideoStream } from '../../../Models/VideoStream.model';
import { ActivatedRoute, Router } from '@angular/router';
import { baseURL } from '../../../Services/api-call.service';
import { Component, ElementRef, OnInit, ViewChild, ContentChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import Peer from 'peerjs';
import { WebRTCService, socket } from '../../../Services/webRTC.service';
import { Call } from '../../../Models/Call.model';
import { Message } from '../../../Models/Message.model';
import { Howl } from 'howler';


@Component({
  selector: 'app-lecture-live',
  templateUrl: './lecture-live.component.html',
  styleUrls: ['./lecture-live.component.css']
})
export class LectureLiveComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('teacherVideo') teacherVideo: ElementRef;
  myVidLoaded: boolean = false;
  studentsStreams: VideoStream[] = [];
  studentStream: MediaStream = new MediaStream([]);
  studentAvatar: string;
  peerID: string;
  myStream: MediaStream = new MediaStream([]);
  streamssIDs: string[] = [];
  myPeer: Peer;
  socket: Socket = socket;
  lectSub: Subscription;
  lectureData: Lecture;
  loading: boolean = true;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  activeLang: string = 'ar';
  myData: Teacher;
  endingLecture: boolean = false;
  changeMode: boolean = false;
  audioOn: boolean = false;
  videoOn: boolean = false;
  studentPeerID: string;
  chatOn: boolean = false;
  newMsg: Message;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lectureService: LectureService,
    private title: Title,
    private lang: LangService,
    private callService: WebRTCService
  ) { }


  ngOnInit(): void {
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
    this.socketListener();
    this.callService.recievingCallConfig();
    this.callService.otherStream.subscribe(stream => {
      // console.log("Changing stream  : ", stream);

      this.studentStream = stream
    })
  }

  checkAuthorize() {
    this.lectSub = this.lectureService.getLectureDetails(this.route.snapshot.params.id).subscribe((lecData: Lecture) => {
      // console.log("LECT DATA : ", lecData);
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
        this.callService.joinLectureRoom(this.route.snapshot.params.id, this.myData?.name, "teacher", this.myData?.avatar)
        this.streamAliveChecker();
      }
    })
  }

  streamAliveChecker() {
    this.socket.on("remove-stream", (streamID) => {
      this.studentsStreams = this.studentsStreams.filter(vs => vs.id != streamID)
    })
  }


  socketListener() {

    this.socket.on("studentJoined", (studentPeerID, studentAvatar) => {
      console.log("Student Joined : ", studentPeerID);
      this.studentPeerID = studentPeerID;
      this.studentAvatar = studentAvatar;
      this.socket.emit("bcTeacherPeerID", this.route.snapshot.params.id, this.callService.getMyPeerID(), this.myData?.avatar)
      let call: Call = {
        recieverID: studentPeerID,
        stream: this.myStream
      }
      this.callService.makeACall(call);
    })

    this.socket.on("studentPeerID", (studentPeerID) => {
      console.log("Recieve student Peer : ", studentPeerID);


      this.studentPeerID = studentPeerID;
    })

    this.socket.on("newMsg", (msgContent, senderName) => {
      console.log("New Msg Rec : ", msgContent);
      this.chatOn = true;
      let msg: Message = {
        content: msgContent,
        source: senderName
      }
      this.newMsg = msg;
      this.playNote()

    })

  }

  sendMsg(msg: Message) {
    console.log("Message Send : ", msg);
    this.socket.emit("sendMessage", this.route.snapshot.params.id, msg.content, this.myData?.name || "Teacher")
  }

  playNote() {
    let sound = new Howl({
      src: ['https://actions.google.com/sounds/v1/doors/locked_doorknob_jiggle.ogg']
    })

    sound.once('load', () => {
      sound.play()
    })
  }

  myVideoStream(stream) {
    let video = this.teacherVideo.nativeElement;
    video.muted = true;
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
      this.myVidLoaded = true;
    })
  }



  openChangeAlert() {
    this.changeMode = true;
  }
  closeChangeAlert(changedAya) {
    this.changeMode = false;
    // console.log("Changed Aya : ", changedAya);
    if (changedAya) {
      this.lectureData.aya = changedAya;
      this.socket.emit("teacherChangeAya", this.lectureData._id, changedAya)
    }

  }

  async toggleVideo() {
    if (this.videoOn) {
      this.videoOn = false;
      await this.removeVideoFromStream();
    }
    else {
      this.videoOn = true;
      await this.addVideoFromStream();
      // this.callTeacher()
    }
    let call: Call = {
      recieverID: this.studentPeerID,
      stream: this.myStream
    }
    this.callService.makeACall(call)
  }


  async toggleAudio() {
    if (this.audioOn) {
      this.audioOn = false;
      await this.removeAudioFromStream();
    } else {
      this.audioOn = true;
      await this.addAudioFromStream();
      // this.callTeacher();

    }
    let call: Call = {
      recieverID: this.studentPeerID,
      stream: this.myStream
    }
    this.callService.makeACall(call)
  }

  toggleChat() {
    if (this.chatOn) {
      this.chatOn = false
    }
    else {
      this.chatOn = true
    }
  }

  async removeVideoFromStream() {
    await this.myStream.getVideoTracks().forEach(t => {
      t.stop();
      this.myStream.removeTrack(t);
    })
  }
  async addVideoFromStream() {

    await navigator.mediaDevices.getUserMedia({ video: true }).then(videoStream => {
      let videoTrack = videoStream.getVideoTracks();
      videoTrack.forEach(t => {
        this.myStream.addTrack(t);
      })
      // console.log("Stream Updated");

    }).catch(err => {
      console.log("adding vidoe stream err : ", err);
    })
  }
  async removeAudioFromStream() {
    await this.myStream.getAudioTracks().forEach(t => {
      t.stop();
      this.myStream.removeTrack(t)
    })
  }
  async addAudioFromStream() {
    await navigator.mediaDevices.getUserMedia({ audio: true }).then(audioStream => {
      let audioTracks = audioStream.getAudioTracks();
      audioTracks.forEach(t => {
        this.myStream.addTrack(t)
      })
    }).catch(err => {
      // console.log("Adding Audio Tracks err : ", err);
    })
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
