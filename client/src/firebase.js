// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-39e67.firebaseapp.com",
  projectId: "mern-blog-39e67",
  storageBucket: "mern-blog-39e67.appspot.com",
  messagingSenderId: "930677811310",
  appId: "1:930677811310:web:e9dd680755e99c663e1e7f"
};

// Initialize Firebase
export const app=initializeApp(firebaseConfig);