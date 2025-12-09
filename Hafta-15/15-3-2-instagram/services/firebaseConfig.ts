// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAeBcOaU1HyOchVgaH-IJ0xSbIxm0Mlqu8',
  authDomain: 'fir-54997.firebaseapp.com',
  projectId: 'fir-54997',
  storageBucket: 'fir-54997.firebasestorage.app',
  messagingSenderId: '398715669923',
  appId: '1:398715669923:web:b9c3e1553a83be631ede16',
  measurementId: 'G-BLZBQ5R5QP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
