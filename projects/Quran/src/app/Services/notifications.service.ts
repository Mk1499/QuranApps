import { AddMobileToken } from '../shared/Store/Notification/notification.action';
import { Store } from '@ngrx/store';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';
import { Injectable } from '@angular/core';


const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class MobileNoteService {

  constructor(
    private store: Store
  ) { }


  requestPermission() {
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
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
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }


}
