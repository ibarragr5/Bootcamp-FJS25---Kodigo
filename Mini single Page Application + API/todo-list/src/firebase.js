import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyDd3a1MdK_3GQN5tdBN_duRRObrdd1izH8",
  authDomain: "todo-list-ce703.firebaseapp.com",
  projectId: "todo-list-ce703",
  storageBucket: "todo-list-ce703.appspot.com",
  messagingSenderId: "542716012990",
  appId: "1:542716012990:web:ca8f4bace1ff4783d1b1ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };