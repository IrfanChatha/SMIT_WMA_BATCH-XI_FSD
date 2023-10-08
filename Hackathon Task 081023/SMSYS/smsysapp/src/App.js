import React from "react"
import Routes from "./Components/Routes"
import "bootstrap/dist/js/bootstrap.bundle";
import { initializeApp } from "firebase/app"

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
initializeApp(firebaseConfig);


function App() {
  return (
    <div>
 <Routes />
    </div>
  );
}

export default App;