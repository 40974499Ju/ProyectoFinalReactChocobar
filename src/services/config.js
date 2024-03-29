
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "palaciodelanovia-98472.firebaseapp.com",
  projectId: "palaciodelanovia-98472",
  storageBucket: "palaciodelanovia-98472.appspot.com",
  messagingSenderId: "655032815212",
  appId: "1:655032815212:web:d60c288cb695e744cfd249",
  measurementId: "G-VHVM8BHS8R"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)