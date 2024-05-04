// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-91a12.firebaseapp.com",
  projectId: "mern-estate-91a12",
  storageBucket: "mern-estate-91a12.appspot.com",
  messagingSenderId: "904289288841",
  appId: "1:904289288841:web:c55a8c319e13ddf4417c58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);