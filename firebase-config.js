// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpEzqrLHMhRvZHtFCQmaq7pIRTXT0gsSs",
  authDomain: "mrs-beba-fakhry-math.firebaseapp.com",
  databaseURL: "https://mrs-beba-fakhry-math-default-rtdb.firebaseio.com",
  projectId: "mrs-beba-fakhry-math",
  storageBucket: "mrs-beba-fakhry-math.appspot.com",
  messagingSenderId: "492921712524",
  appId: "1:492921712524:web:731bde5ea7c5d8332770a9",
  measurementId: "G-4LWG6TF56T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
