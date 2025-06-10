import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAh8oZ4TlRjK-oUiOU4uGxhjmivWn7NMNE",
  authDomain: "assignment1-b7c2f.firebaseapp.com",
  projectId: "assignment1-b7c2f",
  storageBucket: "assignment1-b7c2f.firebasestorage.app",
  messagingSenderId: "493386502281",
  appId: "1:493386502281:web:c8218c63609e072c97f658",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
