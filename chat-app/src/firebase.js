import firebase from "firebase/compat/app";
import "firebase/compat/auth";


export  const auth = firebase.initializeApp({
    apiKey: "AIzaSyBApv5loXECa_0WU45jsOWdcJSz1DP_Hzs",
    authDomain: "honygram.firebaseapp.com",
    projectId: "honygram",
    storageBucket: "honygram.appspot.com",
    messagingSenderId: "541097901654",
    appId: "1:541097901654:web:60a80508cf0a95bfcf85f7"
  }).auth();