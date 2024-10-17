// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU4bfZpl-IZ0UOF27YmssA2SqezcQOE6s",
  authDomain: "mern-83.firebaseapp.com",
  projectId: "mern-83",
  storageBucket: "mern-83.appspot.com",
  messagingSenderId: "481509556678",
  appId: "1:481509556678:web:66bdf96fc5f0aca1c3f2c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;