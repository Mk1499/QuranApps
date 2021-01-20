import { AudioService } from './../../Services/audio.service';
import { LangService } from './../../Services/lang.service';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { SampleService } from './../../Services/sample.service';
import { Sample } from './../../Models/Sample.model';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewChecked, AfterViewInit, ContentChildren, ContentChild } from '@angular/core';
import { Howl } from 'howler';




@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  animations: [
    trigger('animate', [
      state("void", style({
        bottom: "-11vh"
      })),
      transition("void <=> *", animate(500))
    ])
  ]
})
export class AudioPlayerComponent implements OnInit, OnDestroy {

  mode: string = "paused";
  lang: string = "en";
  totalSec: number = 0;
  totalMin: number = 5;
  currentMin: number = 0;
  currentSec: number = 0;
  playingInt;
  audio: Sample;
  audioSub: Subscription;
  modeSub: Subscription;
  loadingTone: boolean = false;

  // sound: HTMLAudioElement = new Audio();
  audioPlayer = new Howl({
    src: ["https://server11.mp3quran.net/shatri/001.mp3", "https://server11.mp3quran.net/shatri/055.mp3"]
  })
  constructor(
    private sampleSer: SampleService,
    private langSer: LangService,
    private audioService: AudioService
  ) {

  }

  ngOnInit(): void {

    this.intialization();
    this.changeSubscription();
    this.modeChangingSub();
  }

  modeChangingSub() {
    this.modeSub = this.audioService.changingMode.subscribe((mode: string) => {
      this.mode = mode;
      if (mode === "playing") {
        this.timer();
        this.loadingTone = false;
      } else if (mode === "paused") {
        clearInterval(this.playingInt);
        this.loadingTone = false;
      } else if (mode === "loading") {
        clearInterval(this.playingInt);
        this.loadingTone = true;
      }
    })
  }

  changeSubscription() {

    this.audioSub = this.audioService.changeActiveSample.subscribe(s => {
      this.audio = s;
      this.totalSec = s?.duration * 60;
      this.totalMin = s?.duration;
      this.currentMin = 0;
      this.currentSec = 0;
      if (this.playingInt) {
        clearInterval(this.playingInt)
      }
    })
  }

  intialization() {
    if (this.audioService.activeSample) {
      this.audio = this.audioService.activeSample;
      this.totalMin = this.audio?.duration;
      this.totalSec = this.audio?.duration * 60;
    }
    this.lang = this.langSer.urlLang;
    this.currentSec = 0;
    this.currentMin = 0;

  }

  timer() {
    // console.log("create timer from : ", source, " => ", this.playingInt);

    this.playingInt = setInterval(() => {
      if ((this.currentMin * 60) + this.currentSec < this.totalSec) {
        if (this.currentSec >= 59) {
          this.currentSec = 0;
          this.currentMin++;
        }
        else {
          this.currentSec++;
        }
      } else {
        this.currentSec = 0;
        this.currentMin = 0;
        this.pause();
      }
    }, 1000)
  }


  play() {
    this.audioService.startPlay(this.audio.url)
  }

  resume() {
    this.audioService.resume();
  }

  pause() {
    this.audioService.pause();
  }

  next() {
    this.audioService.playNext();
  }

  previous() {
    this.audioService.playPrevious();
  }

  ngOnDestroy() {
    if (this.audioSub) {
      this.audioSub.unsubscribe();
    }
    this.modeSub.unsubscribe();
  }

}
