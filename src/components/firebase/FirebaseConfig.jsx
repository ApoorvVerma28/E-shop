// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTNRJefyoHBQ-7vpjC850dzsn4ebSmNIE",
  authDomain: "shopping-app-6d53c.firebaseapp.com",
  projectId: "shopping-app-6d53c",
  storageBucket: "shopping-app-6d53c.appspot.com",
  messagingSenderId: "85668396091",
  appId: "1:85668396091:web:58f579a03b50ffd4b5701e",
  measurementId: "G-T5NE8YKPJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;