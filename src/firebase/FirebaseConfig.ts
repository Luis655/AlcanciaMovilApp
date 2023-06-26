// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYEUMrmzNN-fgktHC4x0ChR2cLPvvCo3E",
  authDomain: "smartmoney-4c112.firebaseapp.com",
  databaseURL: "https://smartmoney-4c112-default-rtdb.firebaseio.com",
  projectId: "smartmoney-4c112",
  storageBucket: "smartmoney-4c112.appspot.com",
  messagingSenderId: "812451208731",
  appId: "1:812451208731:web:4f1eb634d253f1ea5aa2be",
  measurementId: "G-HX186SX3ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
