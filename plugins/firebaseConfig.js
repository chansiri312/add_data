import firebase from "firebase/app";
import "firebase/firestore"

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCmftzvsa98nDAHGC0Y_zmEedHZWyqLUfw",
    authDomain: "db-312-6f2f7.firebaseapp.com",
    projectId: "db-312-6f2f7",
    storageBucket: "db-312-6f2f7.appspot.com",
    messagingSenderId: "897133102423",
    appId: "1:897133102423:web:a5a6dbc30dbae046bbea12"
  };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();