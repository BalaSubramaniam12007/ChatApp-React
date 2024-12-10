import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chattr-s1.firebaseapp.com",
  projectId: "chattr-s1",
  storageBucket: "chattr-s1.firebasestorage.app",
  messagingSenderId: "247101502099",
  appId: "1:247101502099:web:da046c76a50bc255af1366",
  measurementId: "G-J5X1MGXJEM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()
export const db =getFirestore()
export const storage =getStorage()