// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwfOoV_98Bxut4M9RUKppdPaoJ9vvEa1M",
  authDomain: "yourassistant-4e60f.firebaseapp.com",
  projectId: "yourassistant-4e60f",
  storageBucket: "yourassistant-4e60f.firebasestorage.app",
  messagingSenderId: "513305554259",
  appId: "1:513305554259:web:931c3d7e40f1e5f1b445a6",
  measurementId: "G-12T81HD3QG"
  };  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


