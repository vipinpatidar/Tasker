// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHR5Au2Ck4XqVz-xMedIM-TpkDbGgz6W0",
  authDomain: "tasks-react-1984b.firebaseapp.com",
  projectId: "tasks-react-1984b",
  storageBucket: "tasks-react-1984b.appspot.com",
  messagingSenderId: "523582202107",
  appId: "1:523582202107:web:997ce9912f63f5a2bf505e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
