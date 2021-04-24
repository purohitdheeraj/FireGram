// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

// import firestore from 'firebase/app';
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCwjDGFRmJEd5OCDWK5Kw_WbART5JCKdmw",
    authDomain: "dheeraj-firegram.firebaseapp.com",
    databaseURL: "https://dheeraj-firegram-default-rtdb.firebaseio.com",
    projectId: "dheeraj-firegram",
    storageBucket: "dheeraj-firegram.appspot.com",
    messagingSenderId: "414048011310",
    appId: "1:414048011310:web:4cc559e5ff896e1aa18bbf"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore, timestamp};