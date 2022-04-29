// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ2pt0-ASkYYAurMztsSb3Qezyz5C7JjA",
  authDomain: "virtual-decor-c1ef4.firebaseapp.com",
  projectId: "virtual-decor-c1ef4",
  storageBucket: "virtual-decor-c1ef4.appspot.com",
  messagingSenderId: "383419393671",
  appId: "1:383419393671:web:0c1f9a46ce976e41dbfa22",
  measurementId: "G-YYYV37ZSS6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export {auth};