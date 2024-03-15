// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWEfi49IU61lpVVO8CCgt9_i1l83NROA",
  authDomain: "vite-con-27012.firebaseapp.com",
  projectId: "vite-con-27012",
  storageBucket: "vite-con-27012.appspot.com",
  messagingSenderId: "97349009566",
  appId: "1:97349009566:web:90a93378c17f61400e7b8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);