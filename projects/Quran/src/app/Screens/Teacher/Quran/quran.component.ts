import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aya } from '../../../Models/Aya.model';
import { Soura } from '../../../Models/Soura.model';
import { LangService } from '../../../Services/lang.service';
import { QuranService } from '../../../Services/quran.service';


@Component({
  selector: 'quran-selector',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit {

  loading: boolean = true;
  chapters: Soura[] = [];
  chaptersCopy: Soura[] = [];
  searchQ: string = "";
  mode: string = 'soura';
  ayat: Aya[] = [];
  ayatCopy: Aya[] = [];
  activeChapter: Soura;
  indexSub: Subscription;
  ayatSub: Subscription;
  activeLang: string = "ar";

  @Input("lectureId") lectureId: string;
  @Output('doneFlag') doneFlag = new EventEmitter<string>();


  constructor(
    private quranService: QuranService,
    private lang: LangService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadIndex();
    this.activeLang = this.lang.getLang();
  }

  loadIndex() {
    this.indexSub = this.quranService.getIndex().subscribe((data: { chapters: [Soura] }) => {
      this.chapters = data.chapters;
      this.chaptersCopy = data.chapters;
      this.loading = false;
      console.log("chaptres : ", this.chapters);
    })
  }

  filtering() {

    if (this.mode === 'soura') {
      if (this.searchQ) {
        this.chapters = this.chaptersCopy.filter(ch => {
          return ch.name_arabic.includes(this.searchQ) || ch.name_simple.includes(this.searchQ)
        })
      } else {
        this.chapters = this.chaptersCopy;
      }
    }
    else if (this.mode === "aya") {
      this.ayat = this.ayatCopy.filter(aya => aya.text_uthmani.includes(this.searchQ))
    }
  }

  getSouraAyat() {
    this.ayatSub = this.quranService.getChapterAyat(this.activeChapter.id).subscribe((data: { verses: [Aya] }) => {
      this.loading = false;
      this.mode = "aya";
      this.ayat = data.verses;
      this.ayatCopy = data.verses;
      this.searchQ = "";
    })
  }

  chooseSoura(soura) {
    this.activeChapter = soura;
    this.loading = true;
    this.searchQ = "";
    this.getSouraAyat();

  }

  back() {
    this.mode = "soura";
    this.ayat = [];
  }

  setActiveAya(aya: Aya) {
    let lectureId = this.lectureId;
    // this.quranService.setActiveAya(aya);
    this.quranService.updateLectureAya(lectureId, aya.text_uthmani).subscribe(s => {
      console.log("S : ", s);
      // this.router.navigate(['../../lectures/', lectureId], {
      //   relativeTo: this.route
      // })
      this.doneFlag.emit(aya.text_uthmani);
    })
  }

}
