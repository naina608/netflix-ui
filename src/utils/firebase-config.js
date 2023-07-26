// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeudNdLTPF-k4jVP9N7J16MAekUX7oDrM",
  authDomain: "react-netflix-clone-1666b.firebaseapp.com",
  projectId: "react-netflix-clone-1666b",
  storageBucket: "react-netflix-clone-1666b.appspot.com",
  messagingSenderId: "808692417742",
  appId: "1:808692417742:web:97af491ed87f6f788f3c9f",
  measurementId: "G-WDX5W319Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);