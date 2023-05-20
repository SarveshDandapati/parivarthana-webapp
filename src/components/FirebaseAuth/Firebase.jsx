// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTc8dqvDgeUkGD6gVdB5I2kt8EYjLkXb0",
  authDomain: "parivarthana-d97a1.firebaseapp.com",
  projectId: "parivarthana-d97a1",
  storageBucket: "parivarthana-d97a1.appspot.com",
  messagingSenderId: "644604603819",
  appId: "1:644604603819:web:76a616f23e456a48f336ee",
  measurementId: "G-YSX5KHDLDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);