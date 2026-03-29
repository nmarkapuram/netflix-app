// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBeFYsFk-73fLz17D_8a1InwW_3pjtzND8',
  authDomain: 'neflixgpt-6c5bb.firebaseapp.com',
  projectId: 'neflixgpt-6c5bb',
  storageBucket: 'neflixgpt-6c5bb.firebasestorage.app',
  messagingSenderId: '524542275873',
  appId: '1:524542275873:web:1676a40dfa3e7213024e60',
  measurementId: 'G-GHZJFY35ZC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)

export const auth = getAuth()
