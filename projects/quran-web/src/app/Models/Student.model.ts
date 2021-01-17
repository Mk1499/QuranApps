import { Teacher } from './teacher';

export class Student {


  constructor (
    public name: string,
    public arName: string,
    public email: string,
    public teachers: [Teacher],
    public _id: string,
    public role: string,
    public avatar: string,

  ){

  }
}
