// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnDI6ypp5LD6QdE052mYg0jy6sPl3h1ak",
    authDomain: "proyecto-rpa-de6ac.firebaseapp.com",
    projectId: "proyecto-rpa-de6ac",
    storageBucket: "proyecto-rpa-de6ac.appspot.com",
    messagingSenderId: "590946433855",
    appId: "1:590946433855:web:3d9579a69953a67349f18a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);