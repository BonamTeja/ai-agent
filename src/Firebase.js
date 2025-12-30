// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuWCMbYmz4R1tohCReIryjfLGiiRJ8oOo",
  authDomain: "gallant-69c58.firebaseapp.com",
  projectId: "gallant-69c58",
  storageBucket: "gallant-69c58.appspot.com",
  messagingSenderId: "65707808830",
  appId: "1:65707808830:web:854cd8f75a73665b7ad96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

export { app, database };