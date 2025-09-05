// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLJq7F6r6O9XZTQTIpwdrLR0ZySLGQrY",
  authDomain: "shkl-1db60.firebaseapp.com",
  databaseURL: "https://shkl-1db60-default-rtdb.firebaseio.com",
  projectId: "shkl-1db60",
  storageBucket: "shkl-1db60.appspot.com",
  messagingSenderId: "83946018492",
  appId: "1:83946018492:web:3cfa51fa2ddebee27de2b9",
  measurementId: "G-PW83MCMQYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export database
export const rtdb = getDatabase(app);

