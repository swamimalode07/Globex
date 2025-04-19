// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEm476Rf_WjZqixKlyYRCXigbP_1Tougw",
  authDomain: "mylastapp-29768.firebaseapp.com",
  projectId: "mylastapp-29768",
  storageBucket: "mylastapp-29768.firebasestorage.app",
  messagingSenderId: "582691666146",
  appId: "1:582691666146:web:ca08f9dd16e8456677c6bb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}