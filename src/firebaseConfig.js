import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1q_G8KGB8XoTEVy8wHtdtdGkaGyce7Xw",
  authDomain: "padelconquerorreact.firebaseapp.com",
  projectId: "padelconquerorreact",
  storageBucket: "padelconquerorreact.appspot.com",
  messagingSenderId: "824512140459",
  appId: "1:824512140459:web:268d21916e4d8047a953ee",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
