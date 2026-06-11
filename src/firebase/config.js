// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhSFHnCJMU70VIuY-ni9MR5ua7vX_Ke5o",
  authDomain: "proyecto-talento-c621a.firebaseapp.com",
  projectId: "proyecto-talento-c621a",
  storageBucket: "proyecto-talento-c621a.firebasestorage.app",
  messagingSenderId: "820622817176",
  appId: "1:820622817176:web:3eb8ed662c7e80d6ee1ded",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
