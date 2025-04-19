// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPUty2GkUvhr_dnnZ2bmpOr1730xC54pw",
  authDomain: "ecomm-c4980.firebaseapp.com",
  projectId: "ecomm-c4980",
  storageBucket: "ecomm-c4980.firebasestorage.app",
  messagingSenderId: "735558749515",
  appId: "1:735558749515:web:f78625cd845a187765ecce",
  measurementId: "G-KWDP3CGCJG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}