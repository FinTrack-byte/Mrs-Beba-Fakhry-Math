// app.js
import { auth, db } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Register
export async function registerUser(email, password, name, grade, role) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      grade,
      role,
      email,
      createdAt: new Date()
    });

    alert("Account created successfully!");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
}

// Login
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      if (data.role === "teacher") {
        window.location.href = "teacher.html";
      } else if (data.role === "assistant") {
        window.location.href = "assistant.html";
      } else {
        window.location.href = "student.html";
      }
    } else {
      alert("No user data found!");
    }
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

// Logout
export async function logoutUser() {
  await signOut(auth);
  window.location.href = "login.html";
}
