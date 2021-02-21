export class Note {
  constructor(
    public title: string,
    public body: string,
    public click_action?: string,
    public date?: Date,
    public data? : {
      sound:string;
      url:string;
      param?: string
    }
  ) { }
}
