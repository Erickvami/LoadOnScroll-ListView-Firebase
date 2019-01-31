import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAVxeL_3pxm8hNn0P4xobVu1m9hUmx1WWc",
    authDomain: "example1-6f0a9.firebaseapp.com",
    databaseURL: "https://example1-6f0a9.firebaseio.com",
    projectId: "example1-6f0a9",
    storageBucket: "example1-6f0a9.appspot.com",
    messagingSenderId: "357685722626"
  };

export const db= !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();