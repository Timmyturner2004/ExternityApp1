// Import the functions you need from the SDKs you need

import * as firebase from 'firebase';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjv8qLVjuccir7-t8TTB6N2PC5BG81jOo",
  authDomain: "externity-5c2a0.firebaseapp.com",
  projectId: "externity-5c2a0",
  storageBucket: "externity-5c2a0.appspot.com",
  messagingSenderId: "235208111362",
  appId: "1:235208111362:web:49abc8fc6c9f0467937e1b",
  measurementId: "G-YVGXWH8V90"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();
export { auth };