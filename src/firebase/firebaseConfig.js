// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//me traigo el metodo getFirestore
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxf4zQLwC84UK7UWJ5ZFsCdVbpzaFC9Tg",
  authDomain: "xi-celulares.firebaseapp.com",
  projectId: "xi-celulares",
  storageBucket: "xi-celulares.appspot.com",
  messagingSenderId: "256900373762",
  appId: "1:256900373762:web:4ed00eefda92361b14361b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//le paso app al metodo
export const db = getFirestore(app)
