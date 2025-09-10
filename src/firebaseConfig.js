// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqnl_30PVfaQ4OE8dJ9AUUloMCrhCr_SA",
  authDomain: "vidyamitra-de0e1.firebaseapp.com",
  projectId: "vidyamitra-de0e1",
  storageBucket: "vidyamitra-de0e1.appspot.com",
  messagingSenderId: "607299722761",
  appId: "1:607299722761:web:e6f9b3f50cea591d9722d8",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

// Export both auth and db
export { auth, db };
