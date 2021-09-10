import firebase from 'firebase';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UnA1qVwe8UtkToab1RQNJmQ0QhONKPo",
  authDomain: "task-bf4fb.firebaseapp.com",
  projectId: "task-bf4fb",
  storageBucket: "task-bf4fb.appspot.com",
  messagingSenderId: "138130555400",
  appId: "1:138130555400:web:19702ff3502ba6bdd9c7bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database
