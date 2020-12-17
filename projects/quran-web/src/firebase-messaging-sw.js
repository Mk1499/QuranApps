importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyDfY9u2yo2b9zpyZJRYV3d0Bc0SL8URYxk",
  authDomain: "quranak-4a78a.firebaseapp.com",
  projectId: "quranak-4a78a",
  storageBucket: "quranak-4a78a.appspot.com",
  messagingSenderId: "873696623827",
  appId: "1:873696623827:web:ea26ccee646e5126122826",
  measurementId: "G-KQB1GJ59D9",
});

this.addEventListener('notificationclick',(event)=> {
  let url =  event.notification.data.FCM_MSG.notification.click_action ||  "https://quranmk.herokuapp.com"; 
  event.notification.close(); 
  console.log("Note Clicked : ",event.notification);
  event.waitUntil(
    clients.matchAll({type: 'window'}).then( windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            // If so, just focus it.
            if (client.url === url && 'focus' in client) {
                return client.focus();
            }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
            return clients.openWindow(url);
        }
    })
);

})
const messaging = firebase.messaging();
