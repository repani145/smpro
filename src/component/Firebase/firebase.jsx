// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFUwwmsIla3e_l9ldCJV4oHVHQ82OKrTk",
  authDomain: "authentication-58868.firebaseapp.com",
  projectId: "authentication-58868",
  storageBucket: "authentication-58868.appspot.com",
  messagingSenderId: "154920204876",
  appId: "1:154920204876:web:d44d323e01563f210092e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth}