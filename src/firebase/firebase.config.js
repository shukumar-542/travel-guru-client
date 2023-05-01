// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9dVsteGHKoZWw4yvnY6vY55T638XyHLk",
  authDomain: "tarvel-guru-auth.firebaseapp.com",
  projectId: "tarvel-guru-auth",
  storageBucket: "tarvel-guru-auth.appspot.com",
  messagingSenderId: "122697969408",
  appId: "1:122697969408:web:7ffda61b1f35959d020de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;