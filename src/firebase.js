import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDjdYlvvZHkFN6ULK3E3BONe5MzpYCgjcg",
    authDomain: "dahimindgame-248fd.firebaseapp.com",
    projectId: "dahimindgame-248fd",
    storageBucket: "dahimindgame-248fd.appspot.com",
    messagingSenderId: "424837187710",
    appId: "1:424837187710:web:dd392027eb5173bcbd702f",
    measurementId: "G-1R4XF9W7N6"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //export const fb = firebase.initializeApp(firebaseConfig);
  
export const fb = firebase.default.initializeApp(firebaseConfig);