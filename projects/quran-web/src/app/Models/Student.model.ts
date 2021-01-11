import { Teacher } from './teacher';

export interface Student {
  name: string;
  arName: string;
  email: string;
  teachers: [Teacher];
  _id: string;
  role: string;
  avatar: string;
}
