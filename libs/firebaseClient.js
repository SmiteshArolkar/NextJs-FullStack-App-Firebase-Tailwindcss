import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const clientCreds = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCreds);
  
}

export const db = firebase.firestore()

export default firebase;

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    return result.user;s
  } catch (error) {
    console.log(error);
  }
};

export const signInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

export const signInWithTwitter = async () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

export async function signInWithEmailPassword(email, password) {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(result.user);
    return result.user;
  } catch (error) {
    console.log(error);
  }
}

export async function signUpWithEmailPassword(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(
      getAuth(firebase.app()),
      email,
      password
    );
    console.log(result.user);
    return result.user;
  } catch (error) {
    console.log(error.code);
  }
}
