// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3NBgK6nKnNvc_qJreqnDwGcuHAFQZhkw",
  authDomain: "scholar-stream-project.firebaseapp.com",
  projectId: "scholar-stream-project",
  storageBucket: "scholar-stream-project.firebasestorage.app",
  messagingSenderId: "249882870226",
  appId: "1:249882870226:web:f185fe1eacc1e9e125880b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;