// Didn't work

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_APP_FIREBASE_APP_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Worked

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqYJrxpimqAQ1mLcFFYS6pehBpLsS4pzw",
  authDomain: "next-todo-7b577.firebaseapp.com",
  projectId: "next-todo-7b577",
  storageBucket: "next-todo-7b577.appspot.com",
  messagingSenderId: "855164816793",
  appId: "1:855164816793:web:8572a437f1d7ba61f61708",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
