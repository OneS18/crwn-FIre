import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyDJ-2MEaPkhvTNvpFo4SflFVcay_P5qXQo",
    authDomain: "crown-db-91dd1.firebaseapp.com",
    projectId: "crown-db-91dd1",
    storageBucket: "crown-db-91dd1.appspot.com",
    messagingSenderId: "733535963539",
    appId: "1:733535963539:web:f8c9c6ea05ebcc4e46c066",
    measurementId: "G-LN0CRB7E9S"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_acoount'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;