import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZvvopZKxDm0EYtHWSv53HY077nTsfZF8",
  authDomain: "auth-development-19625.firebaseapp.com",
  projectId: "auth-development-19625",
  storageBucket: "auth-development-19625.appspot.com",
  messagingSenderId: "332061639858",
  appId: "1:332061639858:web:e60a98bb6cca85fd6775ab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
