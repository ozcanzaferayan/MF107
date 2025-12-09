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
  apiKey: 'AIzaSyCI_0B_Emjb3cW4O_adPEigJAc8-mkIpWQ',
  authDomain: 'auth-a88fc.firebaseapp.com',
  projectId: 'auth-a88fc',
  storageBucket: 'auth-a88fc.firebasestorage.app',
  messagingSenderId: '662485526957',
  appId: '1:662485526957:web:75065b7fc778d64f09d924',
  measurementId: 'G-FP5MLY14KT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
