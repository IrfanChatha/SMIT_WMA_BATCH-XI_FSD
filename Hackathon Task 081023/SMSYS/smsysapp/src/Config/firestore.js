import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };