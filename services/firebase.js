// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR1t2GSiclzTdJVRufCAIntOlw2xcn8Sk",
  authDomain: "loginmetodologiasagiles.firebaseapp.com",
  projectId: "loginmetodologiasagiles",
  storageBucket: "loginmetodologiasagiles.appspot.com",
  messagingSenderId: "901258231998",
  appId: "1:901258231998:web:303e53bfc5819c1eed1eef",
  measurementId: "G-91K0FNC5WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);