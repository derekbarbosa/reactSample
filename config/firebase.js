// Import the functions you need from the SDKs you need
import *  from firebase as 'firebase/app';
import 'firebase/auth';

import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.REACT_APP_FIREBASE_API_KEY,
  authDomain: Constants.manifest?.extra?.FIREBASE_AUTH_DOMAIN,
  projectId: Constants.manifest?.extra?.FIREBASE_PROJ_ID,
  storageBucket: Constants.manifest?.extra?.FIREBASE_STORE_BUCKET,
  messagingSenderId: Constants.manifest?.extra?.FIREBASE_MESSAGE_ID,
  appId: Constants.manifest?.extra?.FIREBASE_APP_ID,
};

let app;

if(firebase.getApps().length === 0){

  app = firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase

export default app;
