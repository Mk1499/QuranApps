import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

const { PushNotifications } = Plugins;

export const requestPermission = () => {
  PushNotifications.requestPermission().then(result => {
    if (result.granted) {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      // Show some error
    }
  });
}

export const notificationListeners = () => {
  PushNotifications.addListener(
    'registration',
    (token: PushNotificationToken) => {
      alert('Push registration success, token: ' + token.value);
    },
  );

  PushNotifications.addListener('registrationError', (error: any) => {
    alert('Error on registration: ' + JSON.stringify(error));
  });

  PushNotifications.addListener(
    'pushNotificationReceived',
    (notification: PushNotification) => {
      alert('Push received: ' + JSON.stringify(notification));
    },
  );

  PushNotifications.addListener(
    'pushNotificationActionPerformed',
    (notification: PushNotificationActionPerformed) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    },
  );
}

