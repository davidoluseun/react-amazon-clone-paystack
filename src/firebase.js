import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBT89dg-p8gs1yW51GrDRpO790yFYRjj8Q",
  authDomain: "react--clone-stripe.firebaseapp.com",
  projectId: "react--clone-stripe",
  storageBucket: "react--clone-stripe.appspot.com",
  messagingSenderId: "577877820088",
  appId: "1:577877820088:web:fe9a605acf0da8283eea4d",
  measurementId: "G-HJ2K88HL7C",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
