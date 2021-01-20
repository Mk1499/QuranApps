import { Subscription } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Sample } from './../../Models/Sample.model';
import { AudioService } from './../../Services/audio.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mobile-audio-player',
  templateUrl: './mobile-audio-player.component.html',
  styleUrls: ['./mobile-audio-player.component.css'],
  animations: [
    trigger('animate', [
      state("void", style({
        bottom: "-11vh"
      })),
      transition("void <=> *", animate(500))
    ])
  ]

})
export class MobileAudioPlayerComponent implements OnInit, OnDestroy {

  audio: Sample;
  lang: string = "en";
  mode: string = "loading";
  playingInt;
  loadingTone: boolean = false;
  changeModeSub: Subscription;
  changeAudioSub: Subscription;

  constructor(
    private audioService: AudioService
  ) { }

  ngOnInit(): void {

    this.changeAudioSub = this.audioService.changeActiveSample.subscribe((audio: Sample) => {
      this.audio = audio;
      if (this.playingInt) {
        clearInterval(this.playingInt)
      }
    });

    this.changeModeSub = this.audioService.changingMode.subscribe((mode: string) => {
      this.mode = mode;
      if (mode === "playing") {
        this.loadingTone = false;
      } else if (mode === "paused") {
        clearInterval(this.playingInt);
        this.loadingTone = false;
      } else if (mode === "loading") {
        this.loadingTone = true;
      }
    })

  }

  play() {
    this.audioService.startPlay(this.audio.url);
  }
  pause() {
    this.audioService.pause();
  }
  resume() {
    this.audioService.resume();
  }

  next() {
    this.audioService.playNext();
  }

  previous() {
    this.audioService.playPrevious();
  }


  ngOnDestroy() {
    this.changeAudioSub.unsubscribe();
    this.changeModeSub.unsubscribe();
  }


}
