
 import  firebase from "firebase";
 import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDQcKkko2tEWaSfg903A0G8C-ErgWzP4SI",
  authDomain: "todo-8115e.firebaseapp.com",
  projectId: "todo-8115e",
  storageBucket: "todo-8115e.appspot.com",
  messagingSenderId: "773882774621",
  appId: "1:773882774621:web:67a3b2c1e8a7bddb1e79b4"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
export default auth;
