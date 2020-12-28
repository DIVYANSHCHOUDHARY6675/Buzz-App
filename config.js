import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAomUYtSsOyJBNGORz2CU2i22iVkqqU8Js",
  authDomain: "story-hub-6d892.firebaseapp.com",
  projectId: "story-hub-6d892",
  storageBucket: "story-hub-6d892.appspot.com",
  messagingSenderId: "219008582936",
  appId: "1:219008582936:web:36a7ddc25e1ffef369ca6d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   