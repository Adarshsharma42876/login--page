// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADXnenFXl1IrO7OvvP6jEJ5fG-fn41KwU',
  authDomain: 'a1-games-a1a51.firebaseapp.com',
  projectId: 'a1-games-a1a51',
  storageBucket: 'a1-games-a1a51.firebasestorage.app',
  messagingSenderId: '799230321610',
  appId: '1:799230321610:web:6bf334914920ba94fe2533',
  measurementId: 'G-KRMKNSSZM0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
export const auth = getAuth(app);
console.log("auth",auth)

export default app;
