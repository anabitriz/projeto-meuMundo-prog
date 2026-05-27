// firebaseConfig.js

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCfS8_isqypSowk3C6Bc1BTFekgt1CYqQ",
  authDomain: "meumundo-ab065.firebaseapp.com",
  projectId: "meumundo-ab065",
  storageBucket: "meumundo-ab065.firebasestorage.app",
  messagingSenderId: "1003780249603",
  appId: "1:1003780249603:web:450fa3feeb5f97c2f0d636",
  measurementId: "G-8RQ78JW4V3"
};

// inicia firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// firestore
export const db = getFirestore(app);
