// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDh4ZU2EYZWxVfKViivKJpTvRtwUYsbe5c',
  authDomain: 'fir-tekrar-85d13.firebaseapp.com',
  projectId: 'fir-tekrar-85d13',
  storageBucket: 'fir-tekrar-85d13.firebasestorage.app',
  messagingSenderId: '93885960485',
  appId: '1:93885960485:web:17acd068fceecd492e4acc',
  measurementId: 'G-KV6E8YJNS9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
