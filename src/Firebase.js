// firebase.js or Firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAP65v9yg0w4pktvWZQfTSI9zZoTc_0pUU",
  authDomain: "ai-agent-edb5b.firebaseapp.com",
  databaseURL: "https://ai-agent-edb5b-default-rtdb.firebaseio.com",
  projectId: "ai-agent-edb5b",
  storageBucket: "ai-agent-edb5b.firebasestorage.app",
  messagingSenderId: "529463506388",
  appId: "1:529463506388:web:4e4be48ac1f7db2e439241",
  measurementId: "G-MTFJ4GTLCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { app, database };