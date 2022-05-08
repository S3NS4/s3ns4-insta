// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDS1DVMqAMDKPmybS-5aL8YaHg5H8Vu3cE',
  authDomain: 's3ns4-insta.firebaseapp.com',
  projectId: 's3ns4-insta',
  storageBucket: 's3ns4-insta.appspot.com',
  messagingSenderId: '343103131800',
  appId: '1:343103131800:web:a4bd20682c9d14d0ed00ed',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
