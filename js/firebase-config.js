// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEzqrLHMhRvZHtFCQmaq7pIRTXT0gsSs",
  authDomain: "mrs-beba-fakhry-math.firebaseapp.com",
  databaseURL: "https://mrs-beba-fakhry-math-default-rtdb.firebaseio.com",
  projectId: "mrs-beba-fakhry-math",
  storageBucket: "mrs-beba-fakhry-math.appspot.com", // ✅ تصحيح هنا
  messagingSenderId: "492921712524",
  appId: "1:492921712524:web:731bde5ea7c5d8332770a9",
  measurementId: "G-4LWG6TF56T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
