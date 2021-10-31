// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYRpKlXz1_VvjCWQbvfk8k1yDgqQ40lac",
  authDomain: "dani-gon.firebaseapp.com",
  projectId: "dani-gon",
  storageBucket: "dani-gon.appspot.com",
  messagingSenderId: "173120880741",
  appId: "1:173120880741:web:53632e75348e9ee086468c",
  measurementId: "G-DGGP5ZEKRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);