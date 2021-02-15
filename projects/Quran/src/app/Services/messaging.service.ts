import { baseURL } from './api-call.service';
import { HttpClient } from '@angular/common/http';
import { AddWebToken } from '../shared/Store/Notification/notification.action';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../Models/notification.model';
import { Subject } from 'rxjs';


@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  newNotes: number = 0;
  allNotes: Note[] = [];
  newNotesChanged: Subject<Note> = new Subject<Note>();


  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private store: Store,
    private http: HttpClient
  ) {
    this.angularFireMessaging.messages.subscribe(
      (msg) => {
        // msg.onMessage = msg.onMessage.bind(msg);
        // msg.onTokenRefresh = msg.onTokenRefresh.bind(msg);
        console.log("M : ", msg);

      }
    )
  }

  getIntialNotes(userId, userType) {
    let url = `${baseURL}/notify/user`;
    console.log("CALLED , ", userId, userType);

    return this.http.post(url, {
      recieverId: userId,
      recieverType: userType
    })
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log("FB Token : ", token);
        this.store.dispatch(new AddWebToken(token))
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {

        console.log("Note Recived : ", payload);


        let note = new Note(payload.title || "Note Title",
          payload.notification.body || "Note Body",
          payload.notification.click_action || "https://www.google.com",
        );

        // this.allNotes.push(note);
        // this.newNotes++;
        this.newNotesChanged.next(note);

        this.currentMessage.next(payload);
        this.showCutomeNotification(payload);
      })
  }

  showCutomeNotification(payload: any) {
    let notifyData = payload['notification'];
    let title = payload['title'] || "Quran MK Note";
    let options = {
      body: notifyData['body'],
      icon: 'https://image.shutterstock.com/image-vector/mk-initial-letters-looping-linked-260nw-419294407.jpg',
      badge: 'https://image.shutterstock.com/image-vector/mk-initial-letters-looping-linked-260nw-419294407.jpg',
      image: 'https://image.shutterstock.com/image-vector/mk-initial-letters-looping-linked-260nw-419294407.jpg'
    };
    console.log("new message recieved : ", notifyData);

    let notify: Notification = new Notification(title, options);

    // notify.onclick = event =>{
    //   event.preventDefault();
    //   window.location.href = 'https://quranmk.herokuapp.com'
    // }
  }
}
