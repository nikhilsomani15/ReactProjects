import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEy9oR4wKCIGOouc4PXB5Ph1opYTk39ls",
  authDomain: "shopping-813dc.firebaseapp.com",
  projectId: "shopping-813dc",
  storageBucket: "shopping-813dc.firebasestorage.app",
  messagingSenderId: "596146718382",
  appId: "1:596146718382:web:8ab8620a5f473f2d968f3f",
  measurementId: "G-3MB5SRJQ5E"
};

const app=initializeApp(firebaseConfig)
const db =getFirestore(app)
const auth=getAuth(app)

export {db,auth}