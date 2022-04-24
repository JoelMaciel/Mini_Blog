import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqCOlWKt17_gu207T6XzpGFgNfavnnQ9Y",
  authDomain: "miniblog-a0d57.firebaseapp.com",
  projectId: "miniblog-a0d57",
  storageBucket: "miniblog-a0d57.appspot.com",
  messagingSenderId: "526274956556",
  appId: "1:526274956556:web:c2f111474d1d3c0e9f0d29",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
