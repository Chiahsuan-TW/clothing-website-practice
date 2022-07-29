

import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTqz7_FyVWf3IdXD1o1Ymql6KptWWY_xY",
  authDomain: "clothing-website-db-67fc3.firebaseapp.com",
  projectId: "clothing-website-db-67fc3",
  storageBucket: "clothing-website-db-67fc3.appspot.com",
  messagingSenderId: "960777276306",
  appId: "1:960777276306:web:0196d0394378c20fb00f4b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// the setCustomParameters would take configuration object to tell the provider how to behave
// prompt -> everytime someone interacts with our provider, we want to force them to select the account
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)