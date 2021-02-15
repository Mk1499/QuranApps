import { LangService } from '../../../Services/lang.service';
import { Title } from '@angular/platform-browser';
import { Subscription, Subject } from 'rxjs';
import { LectureService } from '../../../Services/lecture.service';
import { Student } from '../../../Models/Student.model';
import { VideoStream } from '../../../Models/VideoStream.model';
import { ActivatedRoute, Router } from '@angular/router';
import { baseURL } from '../../../Services/api-call.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import Peer from 'peerjs';
import { Lecture } from '../../../Models/Lecture.model';
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc';
import { WebRTCService, socket } from '../../../Services/webRTC.service';
import { Call } from '../../../Models/Call.model';
import { ThemeService } from 'ng2-charts';
import { Message } from '../../../Models/Message.model';
import {Howl} from 'howler';



@Component({
  selector: 'app-lecture-live',
  templateUrl: './lecture-live.component.html',
  styleUrls: ['./lecture-live.component.css']
})
export class LectureLiveComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("teacherVideo") teacherVideo: ElementRef;
  myStream: MediaStream = new MediaStream([]);
  teacherStream: MediaStream = null;
  teacherStreamSub: Subscription;
  teacherVidLoaded: boolean = false;
  teacherAvatar: string;

  myData: Student;
  streamssIDs: string[] = [];
  myPeerID: string;
  teacherPeerID: string;
  navData: Student;
  myPeer: Peer;
  socket: Socket = socket;
  lectSub: Subscription;
  lectureData: Lecture;
  loading: boolean = true;
  imageURL: string = 'https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png';
  activeLang: string = 'ar';
  recorder;
  recording: boolean = false;
  screenRecordStream: MediaStream;
  audioOn: boolean = false;
  videoOn: boolean = false;
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


    this.myData = JSON.parse(localStorage.getItem("quranUser"));
    this.checkAuthorize();

    this.activeLang = this.lang.getLang();

  }


  ngAfterViewInit() {
    this.socketListeners();
    this.callService.recievingCallConfig()
    this.teacherStreamSub = this.callService.otherStream.subscribe(stream => {
      // console.log("Changing stream");
      this.teacherVidLoaded = true
      this.teacherStream = stream;

    })

  }


  checkAuthorize() {
    this.lectSub = this.lectureService.getLectureDetails(this.route.snapshot.params.id).subscribe((lecData: Lecture) => {
      this.lectureData = lecData;
      if (lecData?.coverURL) {
        this.imageURL = lecData.coverURL
      }
      let lectureStudents = lecData.students.map(s => s._id);
      if (!lectureStudents.includes(this.myData._id)) {
        alert("Sorry but you aren't a lecture's student");
        this.router.navigate(['../'], {
          relativeTo: this.route
        })
      } else {
        this.loading = false;
        this.title.setTitle(this.lectureData.name);
        this.callService.joinLectureRoom(this.route.snapshot.params.id, this.myData?.name, "student", this.myData?.avatar)
      }
    })
  }


  socketListeners() {

    this.socket.on("lecture-finished", () => {
      alert("lecture finished");
      this.router.navigate(['../'], {
        relativeTo: this.route
      })
    })


    this.socket.on("newAya", (newAya) => {

      this.lectureData.aya = newAya
    })


    this.socket.on("teacherJoined", (teacherPeerID, teacherAvatar) => {
      // console.log("Teacher Joined : ", teacherPeerID);

      this.teacherPeerID = teacherPeerID;
      this.teacherAvatar = teacherAvatar;
      this.socket.emit("bcStudentPeerID", this.route.snapshot.params.id, this.callService.getMyPeerID(), this.myData?.avatar)
      let call: Call = {
        recieverID: teacherPeerID,
        stream: this.myStream
      }
      this.callService.makeACall(call)
    })


    this.socket.on("teacherPeerID", (teacherPeerID) => {
      this.teacherPeerID = teacherPeerID;
    })

    this.socket.on("newMsg", (msgCont, senderName) => {

      console.log("New Msg Rec : ", msgCont);
      this.chatOn = true;
      let msg: Message = {
        content: msgCont,
        source: senderName
      }
      this.newMsg = msg;
      this.playNote()
    })

  }

  sendMsg(msg: Message) {
    console.log("Message Send : ", msg);
    // msg.source = this.myData?.name || "Student";
    this.socket.emit("sendMessage", this.route.snapshot.params.id, msg.content, this.myData?.name || "Student")
  }

  playNote(){
    let sound = new Howl({
      src:['https://actions.google.com/sounds/v1/doors/locked_doorknob_jiggle.ogg']
    })

    sound.once('load',()=>{
      sound.play()
    })
  }


  async recordScreen() {
    const options = {
      video: {
        cursor: "always"
      }
    }

    const mediaDevices: any = navigator.mediaDevices;
    await mediaDevices.getDisplayMedia(options)
      .then(async displayStream => {
        let videoTracks = displayStream.getVideoTracks();
        await navigator.mediaDevices.getUserMedia({ audio: true }).then(audioStream => {
          let audioTracks = audioStream.getAudioTracks();
          this.screenRecordStream = new MediaStream([...videoTracks, ...audioTracks])
          this.screenRecordStream.getVideoTracks()[0].onended = (tr) => {
            this.recording = false;
            this.stopRecording();

          }
        })
      }).catch(err => {
        alert(err)
      })


    this.recorder = new RecordRTCPromisesHandler(this.screenRecordStream, {
      type: 'video',
      mimeType: 'video/webm',
      disableLogs: true,

    });
    this.recorder.startRecording();
    this.recording = true;





  }

  async stopRecording() {

    this.recording = false;
    await this.recorder.stopRecording();
    let blob = await this.recorder.getBlob();
    let name = this.lectureData.name + '.webm';
    invokeSaveAsDialog(blob, name);
    this.screenRecordStream.getTracks().forEach(t => t.stop())
  }

  toggleRecording() {
    if (this.recording) {
      this.stopRecording()
    } else {
      this.recordScreen();
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
      recieverID: this.teacherPeerID,
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
      recieverID: this.teacherPeerID,
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
    }).catch(err => {
      // console.log("adding vidoe stream err : ", err);
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
    this.closeSession();
    if (this.screenRecordStream) {
      this.stopRecording();
    }

    if (this.teacherStreamSub) {
      this.teacherStreamSub.unsubscribe();
    }
  }

  stopStreaming() {
    this.myStream.getTracks().forEach(track => {
      track.stop();
    })
  }

  closeSession() {

    this.stopStreaming()
    this.socket.emit("student-quite", this.callService.getMyPeerID(), this.route.snapshot.params.id)
  }


}
