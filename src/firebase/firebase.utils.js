import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBznk3M4QPAeDFR1zQgT1cDjnQANmjQ-J4",
  authDomain: "ecomm-crown-db.firebaseapp.com",
  databaseURL: "https://ecomm-crown-db.firebaseio.com",
  projectId: "ecomm-crown-db",
  storageBucket: "ecomm-crown-db.appspot.com",
  messagingSenderId: "491153833929",
  appId: "1:491153833929:web:ee4e592c71c3f6cf53b218",
  measurementId: "G-WPHEGVLBZ7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
