// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqUba-5NqE5qm3w6JaPY9SoKKnE4SvMvs",
  authDomain: "icheck-test-539b8.firebaseapp.com",
  projectId: "icheck-test-539b8",
  storageBucket: "icheck-test-539b8.appspot.com",
  messagingSenderId: "577818869389",
  appId: "1:577818869389:web:e64ea6348c74ca1833ecc4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore};