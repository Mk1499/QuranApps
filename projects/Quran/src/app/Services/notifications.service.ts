import { AddMobileToken } from '../shared/Store/Notification/notification.action';
import { Store } from '@ngrx/store';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
} from '@capacitor/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../Models/notification.model';
import { LangService } from './lang.service';


const {
  PushNotifications,
  LocalNotifications
} = Plugins;

@Injectable({
  providedIn: 'root'
})

export class MobileNoteService {
  constructor(
    private store: Store,
    private router: Router,
    private langService: LangService
  ) {

  }



  async fireLocalNotification(title, body, url, param) {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: title,
          body: body,
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: {
            url,
            param
          }
        }
      ]
    });
    console.log('scheduled notifications', notifs);

    LocalNotifications.addListener('localNotificationReceived', (recievedNote) => {
      // console.log("Recieved Note : ", JSON.stringify(recievedNote));
    })

    LocalNotifications.addListener("localNotificationActionPerformed", (notificationAction) => {
      console.log("NOTE CLICKED !!!! : ", JSON.stringify(notificationAction));
      let { url, param } = notificationAction.notification.extra;
      let lang = this.langService.getLang();

      this.router.navigate([`/${lang || 'en'}/${url}`, `${param || ''}`])
    })

  }

  requestPermission() {
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
        alert("Sorry better experiance need to permite notification permission")
      }
    });
  }

  notificationListeners() {
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ' + token.value);
        this.store.dispatch(new AddMobileToken(token.value))
      },
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
        let { title, body, data } = notification;
        this.fireLocalNotification(title, body, data.url, data.param);

      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification) => {
        // alert('Push action performed: ' + JSON.stringify(notification));
        console.log('Push Clicked: ' + JSON.stringify(notification));
        let { url, param } = notification.notification.data;
        let lang = this.langService.getLang();


        this.router.navigate([`/${lang || 'en'}/${url}`, `${param || ''}`])
      },
    );
  }


}
