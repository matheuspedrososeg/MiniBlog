import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCnUzC6Kne6EhiP5jy4b-y5aezYfG46zI",
  authDomain: "miniblog-4470f.firebaseapp.com",
  projectId: "miniblog-4470f",
  storageBucket: "miniblog-4470f.appspot.com",
  messagingSenderId: "912737064873",
  appId: "1:912737064873:web:b639c1a0b73909d481d6b8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
