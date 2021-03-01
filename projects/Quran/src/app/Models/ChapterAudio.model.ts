import { AyaAudio } from './AyaAudio.model';

export interface ChapterAudio {
  chapterID: number;
  ayat: [AyaAudio]
}
