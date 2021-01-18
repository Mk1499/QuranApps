import { LangService } from './../../Services/lang.service';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { SampleService } from './../../Services/sample.service';
import { Sample } from './../../Models/Sample.model';
import { Component, Input, OnInit, OnDestroy, ViewChild, AfterViewChecked, AfterViewInit, ContentChildren, ContentChild } from '@angular/core';
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
  loadingTone: boolean = false;

  // sound: HTMLAudioElement = new Audio();
  audioPlayer = new Howl({
    src: ["https://server11.mp3quran.net/shatri/001.mp3", "https://server11.mp3quran.net/shatri/055.mp3"]
  })
  constructor(
    private sampleSer: SampleService,
    private langSer: LangService
  ) {

  }

  ngOnInit(): void {

    this.intialization();
    this.changeSubscription();
  }

  changeSubscription() {

    this.audioSub = this.sampleSer.changeActiveSample.subscribe(s => {
      this.audio = s;
      this.totalSec = s?.duration * 60;
      this.totalMin = s?.duration;
      this.currentMin = 0;
      this.currentSec = 0;
      if (this.playingInt) {
        clearInterval(this.playingInt)
        this.pause();
      }

      this.play();
    })
  }

  intialization() {
    if (this.sampleSer.activeSample) {
      this.audio = this.sampleSer.activeSample;
      this.totalMin = this.audio?.duration;
      this.totalSec = this.audio?.duration * 60;
    }
    this.lang = this.langSer.urlLang;
    this.currentSec = 0;
    this.currentMin = 0;

  }

  timer(source) {
    console.log("create timer from : ", source, " => ", this.playingInt);

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

  play(resumeFlag = false) {
    this.mode = "playing";
    if (this.playingInt) {
      clearInterval(this.playingInt)
    }
    if (!resumeFlag) {
      this.loadingTone = true;
      this.audioPlayer = new Howl({
        src: [this.audio.url]
      })

      this.audioPlayer.play();
      this.audioPlayer.once('play', () => {
        if (this.mode === 'paused') {
          this.pause();

        }
        this.timer("first play");
        this.loadingTone = false;
      })
    } else {
      this.audioPlayer.play();
      this.timer("Resuminng");
    }
  }

  pause() {
    this.mode = "paused";
    // this.sound.pause();
    if (this.playingInt)
      clearInterval(this.playingInt);
    this.audioPlayer.pause();

  }

  toggle() {
    if (this.mode == "paused") {
      this.play(true)
    } else {
      this.pause();
    }
  }


  ngOnDestroy() {
    if (this.audioSub) {
      this.audioSub.unsubscribe();
    }
  }

}
