import { Student } from './Student.model';
import { Teacher } from './teacher';
export interface Lecture {
  coverURL?: string;
  _id: string;
  name: string;
  arName?: string;
  time: string;
  description: string;
  students: [Student];
  duration: Number;
  teacher: Teacher;
  state?: String;
}
