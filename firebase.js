// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpEzqrLHMhRvZHtFCQmaq7pIRTXT0gsSs",
  authDomain: "mrs-beba-fakhry-math.firebaseapp.com",
  projectId: "mrs-beba-fakhry-math",
  storageBucket: "mrs-beba-fakhry-math.firebasestorage.app",
  messagingSenderId: "492921712524",
  appId: "1:492921712524:web:731bde5ea7c5d8332770a9",
  measurementId: "G-4LWG6TF56T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
