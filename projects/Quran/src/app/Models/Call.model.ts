export interface Call {
  senderID?: string;
  recieverID: string;
  stream?: MediaStream;
  senderRole: string;
}
