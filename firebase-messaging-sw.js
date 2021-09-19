importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');  // version must be same with package.json
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');



firebase.initializeApp({
  apiKey           : "your api key",
  authDomain       : "your auth domain",
  projectId        : "your project id",
  storageBucket    : "your storage",
  messagingSenderId: "message sender",
  appId: "your app id",
  measurementId: "measurement id"
});

const messaging = firebase.messaging();
console.info('firebase messaging service worker is set up')
