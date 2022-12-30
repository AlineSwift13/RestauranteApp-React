// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd0975rQQw-cVoozrTvanmJV7CsvHtXiM",
  authDomain: "fb-reservation-react-fhp.firebaseapp.com",
  projectId: "fb-reservation-react-fhp",
  storageBucket: "fb-reservation-react-fhp.appspot.com",
  messagingSenderId: "199645171097",
  appId: "1:199645171097:web:da400143661c397c8a1708",
  measurementId: "G-KJS24ME1L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();

const getData = async () => {
    const snapshot = await getDocs (collection (db, reservation));
    console.log(snapshot.docs.map(doc => doc.data()));
}