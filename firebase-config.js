// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Tv7E-6tmvvXR5_8YutEDogi1TngjE4k",
  authDomain: "fspo-ffacf.firebaseapp.com",
  databaseURL: "https://fspo-ffacf-default-rtdb.firebaseio.com",
  projectId: "fspo-ffacf",
  storageBucket: "fspo-ffacf.appspot.com",
  messagingSenderId: "319463993206",
  appId: "1:319463993206:web:50983d2c717beadc86d457",
  measurementId: "G-SVYH07LHE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export services to use them in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
