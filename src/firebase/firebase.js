import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAeA9_tjdadnQRY02-ps1jSY24ZTNEjX2o",
    authDomain: "operator-confirm.firebaseapp.com",
    databaseURL: "https://operator-confirm.firebaseio.com",
    projectId: "operator-confirm",
    storageBucket: "",
    messagingSenderId: "29992191676",
    appId: "1:29992191676:web:69001ee6fa3c50f9ca32b9"
  };
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;