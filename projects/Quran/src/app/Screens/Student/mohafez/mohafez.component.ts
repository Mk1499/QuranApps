import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuranService, audioURL } from '../../../Services/quran.service';
import { Chapter } from '../../../Models/Chapter.model';
import { Subscription } from 'rxjs';
import { LangService } from '../../../Services/lang.service';
import { Aya } from '../../../Models/Aya.model';
import { AudioService } from '../../../Services/audio.service';
import { Sample } from '../../../Models/Sample.model';
import { SampleCardComponent } from '../../../Components/sample-card/sample-card.component';
import { ChapterAudio } from '../../../Models/ChapterAudio.model';

@Component({
  selector: 'app-mohafez',
  templateUrl: './mohafez.component.html',
  styleUrls: ['./mohafez.component.css']
})
export class MohafezComponent implements OnInit, OnDestroy {

  chapters: Chapter[] = [];
  ayat: Aya[] = [];
  chaptersSub: Subscription;
  ayatSub: Subscription;
  activeLang: string = "en";
  activeChapterID: number = 1;
  chapterAudio: ChapterAudio = <ChapterAudio>{};
  activeAyaIndex: null;


  constructor(
    private quranService: QuranService,
    private langService: LangService,
    private audioService: AudioService
  ) { }

  ngOnInit(): void {
    this.listChapters();
    this.activeLang = this.langService.getLang();
    this.getChapterAya(1);
  }

  listChapters() {
    this.chaptersSub = this.quranService.getIndex().subscribe((data: { chapters: Chapter[] }) => {

      this.chapters = data.chapters;
    })
  }

  getChapterAya(chapterID) {
    this.activeChapterID = chapterID;

    this.ayatSub = this.quranService.getChapterAyat(chapterID).subscribe((data: { verses: Aya[] }) => {
      console.log("Local chaptes  : ", this.chapterAudio);
      console.log("Ayat : ", data);
      this.ayat = data.verses
    })
  }

  playAya(ayaIndex) {

    this.activeAyaIndex = ayaIndex;

    if (this.chapterAudio[this.activeChapterID]) {
      this.playSavedAudio(ayaIndex);
    }
    else {
      this.quranService.getChapterAyatAudio(this.activeChapterID).subscribe((data: { audio_files: any[] }) => {
        console.log("Audio Arr Online: ", data.audio_files, " index : ", ayaIndex);
        this.chapterAudio[this.activeChapterID] = data.audio_files
        let url = audioURL + data.audio_files[ayaIndex].url;
        this.playAudio(url, ayaIndex);
      })
    }
  }


  playSavedAudio(ayaIndex) {
    console.log("offline : ", this.chapterAudio);

    let url = audioURL + this.chapterAudio[this.activeChapterID][ayaIndex].url;
    this.playAudio(url, ayaIndex);
  }

  playAudio(url, index) {
    let audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
    audio.addEventListener("ended", () => {
      let chapterSounds = this.chapterAudio[this.activeChapterID];
      console.log("AYA Ended : ", chapterSounds.length - 1);
      if (index < chapterSounds.length - 1) {
        this.playAya(index + 1)
      }

    })
  }

  ngOnDestroy(): void {
    this.chaptersSub.unsubscribe();
    if (this.ayatSub) {
      this.ayatSub.unsubscribe();
    }
  }

}
