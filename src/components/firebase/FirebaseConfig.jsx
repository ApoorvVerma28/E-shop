// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkgS3JsG6-0DC5E0dh2BSTNIew5DAuBnc",
  authDomain: "e-shop-78ae2.firebaseapp.com",
  projectId: "e-shop-78ae2",
  storageBucket: "e-shop-78ae2.firebasestorage.app",
  messagingSenderId: "215017852828",
  appId: "1:215017852828:web:20dd072c161c6c5093c259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;