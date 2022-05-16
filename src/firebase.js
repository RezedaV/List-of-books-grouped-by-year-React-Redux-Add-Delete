import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBz8UNTe2vRTe-bpgDX25AGqH39dAcCzrA",
    authDomain: "grouped-list-of-books.firebaseapp.com",
    projectId: "grouped-list-of-books",
    storageBucket: "grouped-list-of-books.appspot.com",
    messagingSenderId: "998813061710",
    appId: "1:998813061710:web:6a16615ee9afd0c599691f"
};

const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);


