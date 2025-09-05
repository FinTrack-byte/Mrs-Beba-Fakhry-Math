// Firebase config - replace with your values if needed
var firebaseConfig = {
  apiKey: "AIzaSyDpEzqrLHMhRvZHtFCQmaq7pIRTXT0gsSs",
  authDomain: "mrs-beba-fakhry-math.firebaseapp.com",
  projectId: "mrs-beba-fakhry-math",
  storageBucket: "mrs-beba-fakhry-math.firebasestorage.app",
  messagingSenderId: "492921712524",
  appId: "1:492921712524:web:731bde5ea7c5d8332770a9",
  measurementId: "G-4LWG6TF56T"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();
