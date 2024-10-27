// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnp0nXxapgrVfWE77q2UlYOtfYe-yLgP8",
  authDomain: "idea-f4926.firebaseapp.com",
  projectId: "idea-f4926",
  storageBucket: "idea-f4926.appspot.com",
  messagingSenderId: "496961781749",
  appId: "1:496961781749:web:e930111cac9c5992e12abc",
  measurementId: "G-R3QWVRT7PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Google Login function
function googleLogin() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      document.getElementById("login").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      alert(`Welcome, ${user.displayName}!`);
    })
    .catch((error) => {
      console.error(error);
      alert("Login failed!");
    });
}

// Logout function
function logout() {
  signOut(auth)
    .then(() => {
      document.getElementById("login").style.display = "block";
      document.getElementById("dashboard").style.display = "none";
      alert("Logged out!");
    })
    .catch((error) => {
      console.error(error);
    });
}

// Expose functions to the global scope
window.googleLogin = googleLogin;
window.logout = logout;
