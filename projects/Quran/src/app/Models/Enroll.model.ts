import { Student } from './Student.model';
export interface Enroll {
  _id:string;
  dateTime:Date;
  active:boolean;
  studentID:Student;
  teacherID:string;
}
