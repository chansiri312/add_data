import firebase from "firebase/app";
import "firebase/firestore"

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyByytontLwa4Xh9qErpYf-8UEu1XTxOw0M",
        authDomain: "db-312.firebaseapp.com",
        projectId: "db-312",
        storageBucket: "db-312.appspot.com",
        messagingSenderId: "7970331107",
        appId: "1:7970331107:web:47183644786fa0f475a8d6"
      };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();