import { Subject } from 'rxjs';
import { Sample } from './../Models/Sample.model';
import { Injectable, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class AudioService {
  activeSample: Sample;
  changeActiveSample = new Subject<Sample>();
  mode: string;
  changingMode = new Subject<string>();
  playedObj: { id?: Sample } = {};
  activeIndex: number = 0;
  lastPlayId : null ;



  audio = new Howl({
    src: ''
  })

  changeSample(sample: Sample) {
    this.activeSample = sample;
    this.changeActiveSample.next(this.activeSample);
  }

  startPlay(audioURL) {
    let playedArrLength = Object.keys(this.playedObj).length;
    this.audio = new Howl({
      src: [audioURL]
    });
    Howler.stop();
    this.changingMode.next("loading");
    this.play();
    this.playedObj[playedArrLength] = this.activeSample;
    this.activeIndex = playedArrLength;
    console.log("Played Object : ", this.playedObj);
    console.log("active Index : ", this.activeIndex);

  }


  playNext() {
    let activeAudio: Sample;
    if (this.playedObj[this.activeIndex + 1]) {
      Howler.stop();
      this.changingMode.next('loading');
      this.activeIndex++;
      activeAudio = this.playedObj[this.activeIndex];
      this.changeActiveSample.next(activeAudio);
      this.audio = new Howl({
        src: [activeAudio.url]
      })
      this.play()
    }
  }

  playPrevious() {
    let activeAudio: Sample;
    if (this.playedObj[this.activeIndex - 1]) {
      Howler.stop();
      this.changingMode.next('loading');
      this.activeIndex--;
      activeAudio = this.playedObj[this.activeIndex];
      this.changeActiveSample.next(activeAudio);
      this.audio = new Howl({
        src: [activeAudio.url]
      });
      this.play();
    }
  }

  private play() {
   this.lastPlayId = this.audio.play();

    this.audio.once('play', (pid) => {
      console.log("P ID : ",pid," loaded");

      if (pid === this.lastPlayId){
        this.changingMode.next('playing')
      } else {
        this.audio.stop(pid);
      }
    })
  }

  resume() {
    this.play();
  }


  pause() {
    if (this.audio) {
      this.audio.pause();
      this.changingMode.next('paused')
    }
  }

  stop() {
    this.audio = null;
    Howler.stop();
  }

}
