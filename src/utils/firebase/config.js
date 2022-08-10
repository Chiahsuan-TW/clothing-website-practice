

import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs } from 'firebase/firestore';

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


// firebaseApp is optional, it works just fine even if the firebaseApp is not passed into the function
export const db = getFirestore(firebaseApp);


// Docs: https://firebase.google.com/docs/firestore/manage-data/add-data
// helper function to upload bulk data at one time
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    // point to the doc reference where we want to store the data
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit();
}


// Docs: https://firebase.google.com/docs/reference/js/firestore_
// helper function to pull data from firebase store
export const getCategoriesAndDocument = async () => {
  // point to the collection and then get all docs under the designated collection
  const categoriesDocRef = collection(db, 'categories')
  const categoriesSnapshot = await getDocs(categoriesDocRef)

  const categoryMap = categoriesSnapshot.docs.reduce((result, category)=> {
    const {title, items} = category.data()
    result[title.toLowerCase()] = items;        
    return result;
  },{})

  return categoryMap
}


// write user data in firestore database
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'user', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInfo
      });
    } catch(error) {
      console.error(error.message)
    }
  }

  return userDocRef
}


// firebase doc: https://firebase.google.com/docs/auth/web/password-auth
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password ) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async(email,password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
}