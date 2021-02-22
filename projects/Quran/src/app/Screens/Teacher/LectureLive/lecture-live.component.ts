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
import { WebRTCService, socket, myPeer } from '../../../Services/webRTC.service';
import { Call } from '../../../Models/Call.model';
import { Message } from '../../../Models/Message.model';
import { Howl } from 'howler';
import { async } from '@angular/core/testing';


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
  studentVidLoaded: boolean = false;
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
  adminPeerID: string;
  myPeerID: string;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lectureService: LectureService,
    private title: Title,
    private lang: LangService,
    private callService: WebRTCService
  ) {

    console.log("PEER : ", myPeer);


  }


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

      this.studentStream = stream;
      this.studentVidLoaded = true;
    })
  }

  checkAuthorize() {
    this.lectSub = this.lectureService.getLectureDetails(this.route.snapshot.params.id).subscribe(async (lecData: Lecture) => {
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
        this.title.setTitle(this.lectureData.name);
        // this.callService.joinLectureRoom(this.route.snapshot.params.id, this.myData?.name, "teacher", this.myData?.avatar)
        this.streamAliveChecker();
        await this.joinLectureRoom();
      }
    })
  }

  async joinLectureRoom() {

    let lectureID = this.route.snapshot.params.id;
    let studentName = this.myData.name;
    let avatar = this.myData.avatar;
    if (myPeer.id) {
      let peerID = myPeer.id;
      this.myPeerID = myPeer.id;
      this.socket.emit("teacherJoin", lectureID, peerID, studentName, avatar);
      console.log("Joinning Lecture room with peer id : ", peerID);
      this.loading = false;
    } else {
      await myPeer.on('open', peerID => {
        this.myPeerID = peerID;
        this.socket.emit("teacherJoin", lectureID, peerID, studentName, avatar);
        console.log("Joinning Lecture room with peer id : ", peerID);
        this.loading = false;

      })
    }
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
      this.socket.emit("bcTeacherPeerID", this.route.snapshot.params.id, this.myPeerID, this.myData?.avatar)
      this.callStudent();
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
    this.socket.on("adminPeerID", (adminPeerID) => {
      console.log("Reciving admin peer id : ", adminPeerID);
      this.adminPeerID = adminPeerID;
    })

    this.socket.on('adminConnected', (adminPeerID) => {
      // this.myPeer.call(adminPeerID,this.myStream)
      console.log("Admin Connected : ", adminPeerID);
      this.adminPeerID = adminPeerID;
      this.callAdmin()
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


  callAdmin() {
    console.log("calleding Admin");
    let call: Call = {
      recieverID: this.adminPeerID,
      stream: this.myStream,
      senderRole: "Teacher"
    }
    this.callService.makeACall(call)
  }

  callStudent() {
    let call: Call = {
      recieverID: this.studentPeerID,
      stream: this.myStream,
      senderRole: 'Teacher'
    }
    this.callService.makeACall(call)
  }

  async toggleVideo() {
    if (this.videoOn) {
      this.videoOn = false;
      await this.removeVideoFromStream();
    }
    else {
      this.videoOn = true;
      await this.addVideoFromStream();
    }
    if (this.studentPeerID) {
      this.callStudent();
    }
    if (this.adminPeerID) {
      this.callAdmin();
    }
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
    if (this.studentPeerID) {
      this.callStudent();
    }

    if (this.adminPeerID) {
      this.callAdmin();
    }
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
