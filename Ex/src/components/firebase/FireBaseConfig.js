import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDy01Qr2NENcTm7WtUOEdavdOATC3_6DIw",
    authDomain: "chat-b5e28.firebaseapp.com",
    databaseURL: "https://chat-b5e28.firebaseio.com",
    projectId: "chat-b5e28",
    storageBucket: "",
    messagingSenderId: "198914694702",
    appId: "1:198914694702:web:59f836bc2d7ce7861449bf"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);