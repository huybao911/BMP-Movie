import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxMPeiHq6MkspZ1KpFTzGYu7ZvXcPnR0E",
  authDomain: "bmp-movie.firebaseapp.com",
  projectId: "bmp-movie",
  storageBucket: "bmp-movie.appspot.com",
  messagingSenderId: "267616699667",
  appId: "1:267616699667:web:87a53627ff91d29b6186e6",
  measurementId: "G-WHKQMMX6V2"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
