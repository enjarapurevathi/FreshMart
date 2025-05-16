// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your Firebase config object (replace with actual values)
const firebaseConfig = {
  apiKey: "AIzaSyAugxrnimtcXkwt_mUGkVwQqYqnSHk14rA",
  authDomain: "freshbite-5b292.firebaseapp.com",
  projectId: "freshbite-5b292",
  storageBucket: "freshbite-5b292.appspot.com",
  messagingSenderId: "693546641344",
  appId: "1:693546641344:web:7f231912a1932f908d0a25",
  measurementId: "G-Z8G46JYQCT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

export { auth }; // Export auth to use in other components
