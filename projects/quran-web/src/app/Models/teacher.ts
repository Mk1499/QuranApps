import { Student } from './Student.model';

export interface Teacher {
  _id?: string;
  email: string;
  name: string;
  arName: string;
  avatar: string;
  samples?: [string];
  price: string;
  role?: string;
  password?: string;
  students: [Student]
}
