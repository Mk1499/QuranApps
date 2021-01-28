import { VideoStream } from './../../Models/VideoStream.model';
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: ElementRef;
  @Input("vidData") vidData: VideoStream;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.play();

  }

  play() {
    let vid = this.video.nativeElement;
    vid.srcObject = this.vidData.streamData;
    vid.muted = true;
    console.log("new Video for : ", this.vidData);

    vid.addEventListener("loadedmetadata", () => {
      vid.play();
    })
  }


}
