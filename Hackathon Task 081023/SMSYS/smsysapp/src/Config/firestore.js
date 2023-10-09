// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJgOZRT8M9OdEs2dRpftMaXPT7h8r5PkU",
  authDomain: "student-system-df203.firebaseapp.com",
  projectId: "student-system-df203",
  storageBucket: "student-system-df203.appspot.com",
  messagingSenderId: "634066151224",
  appId: "1:634066151224:web:9443d6a03d9eb9be9d83cd",
  measurementId: "G-TEH449853R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore, analytics };