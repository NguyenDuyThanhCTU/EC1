import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_v4jf2PGvN3Ang2RrYSZQkqnDbnTH5qo",
  authDomain: "generalivn-a153f.firebaseapp.com",
  projectId: "generalivn-a153f",
  storageBucket: "generalivn-a153f.appspot.com",
  messagingSenderId: "338072391178",
  appId: "1:338072391178:web:fcb234f3895516752119f3",
  measurementId: "G-7WQYD8L1C8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
