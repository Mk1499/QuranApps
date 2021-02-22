import { VideoStream } from '../../Models/VideoStream.model';
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('video') video: ElementRef;
  @Input("vidData") vidData: VideoStream;
  @Input("stream") stream: MediaStream;
  @Input("controls") controls: boolean;
  @Input("poster") poster: string;
  vidoeStream: MediaStream;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.stream) {
      this.vidoeStream = this.stream;
      this.play();
    }

  }

  play(muted = true) {
    let vid = this.video.nativeElement;
    vid.srcObject = this.stream;
    vid.muted = muted;
    vid.controls = this.controls

    vid.addEventListener("loadedmetadata", () => {
      try {
        vid.play();
      } catch (err) {
        console.log("Playing Err");
        alert("Sorry But you need to play video manually")
        this.play(true)
      }
    })
  }

  ngOnChanges(changes) {
    console.log("Changes  : ", changes);
    this.stream = changes.stream.currentValue;
    if (this.video)
      this.play(false);
  }


}
