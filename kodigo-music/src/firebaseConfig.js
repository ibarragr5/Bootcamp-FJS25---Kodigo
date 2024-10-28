import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoIgPTnMMVUiP15UESpTrexX1EFUC3nYk",
  authDomain: "kodigo-music-26ca1.firebaseapp.com",
  projectId: "kodigo-music-26ca1",
  storageBucket: "kodigo-music-26ca1.appspot.com",
  messagingSenderId: "427274171078",
  appId: "1:427274171078:web:556ffc3bb616125f589dc7",
  measurementId: "G-BTTXQFY5W6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };