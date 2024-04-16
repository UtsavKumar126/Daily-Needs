// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMIZA5HwNqU861tKFX3-wBMuA3zR1rQoY",
  authDomain: "e-commerce-f3bd1.firebaseapp.com",
  projectId: "e-commerce-f3bd1",
  storageBucket: "e-commerce-f3bd1.appspot.com",
  messagingSenderId: "684775349983",
  appId: "1:684775349983:web:ed414614d223a50b49936a",
  measurementId: "G-JDENVCBN2E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();