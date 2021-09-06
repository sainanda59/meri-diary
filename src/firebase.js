import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIAlaklGVXDtY6EgJ0fWShpzPJihr49q8",
  authDomain: "meri-diary-b2e16.firebaseapp.com",
  projectId: "meri-diary-b2e16",
  storageBucket: "meri-diary-b2e16.appspot.com",
  messagingSenderId: "852093603969",
  appId: "1:852093603969:web:e54130a3c5402fb6a6bd80",
  measurementId: "G-SD85R5F7C2"
});

const db = firebaseApp.firestore();
export default db;
