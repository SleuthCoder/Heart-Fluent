import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBxkauua8q66KoUfhSvI4uAK46ujxwhn28",
  authDomain: "heart-fluent.firebaseapp.com",
  projectId: "heart-fluent",
  storageBucket: "heart-fluent.appspot.com",
  messagingSenderId: "82181247475",
  appId: "1:82181247475:web:2bdb0aad2b262565cb8286"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
