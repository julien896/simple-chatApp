import * as firebase from 'firebase';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyCf3n3rnM_7CrxjGoGDWvSelenAGk-gzfU",
    authDomain: "chatapp-64da5.firebaseapp.com",
    databaseURL: "https://chatapp-64da5.firebaseio.com",
    projectId: "chatapp-64da5",
    storageBucket: "chatapp-64da5.appspot.com",
    messagingSenderId: "118507479409",
    appId: "1:118507479409:web:d2601f2c07b134032916d0"
  };

  firebase.initializeApp(config);

  export const db = firebase.firestore();