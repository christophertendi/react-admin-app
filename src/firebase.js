// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
apiKey: "AIzaSyCnzulJ3ES5_4qxKkEo8t5A4m5L58WE5dQ",
authDomain: "ams-new-cc764.firebaseapp.com",
projectId: "ams-new-cc764",
storageBucket: "ams-new-cc764.appspot.com",
messagingSenderId: "366605546159",
appId: "1:366605546159:web:13d8a0687cbe2f17b65a5a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebaseConfig };
