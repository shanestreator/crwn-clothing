import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAYTmGEdHtZAQNR9pqAF-0athiVW5GC9sQ",
  authDomain: "crwn-db-978a7.firebaseapp.com",
  databaseURL: "https://crwn-db-978a7.firebaseio.com",
  projectId: "crwn-db-978a7",
  storageBucket: "crwn-db-978a7.appspot.com",
  messagingSenderId: "858308165370",
  appId: "1:858308165370:web:9ed68dc48ebfcd23b41343",
  measurementId: "G-PX9L6SJTN2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase