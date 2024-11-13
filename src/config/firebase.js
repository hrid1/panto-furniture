// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCczyLbTipEjbvkN-shbk8BBp_h6kk-hhs",
  authDomain: "panto-furniture.firebaseapp.com",
  projectId: "panto-furniture",
  storageBucket: "panto-furniture.firebasestorage.app",
  messagingSenderId: "8257712400",
  appId: "1:8257712400:web:ed79e5ff2f6386543d7595",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
