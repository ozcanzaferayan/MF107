import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase config keys
const firebaseConfig = {
  apiKey: 'AIzaSyBQZnsxezH_CveER063tF_WuWup5ekLM_0',
  authDomain: 'yumi-fea74.firebaseapp.com',
  projectId: 'yumi-fea74',
  storageBucket: 'yumi-fea74.firebasestorage.app',
  messagingSenderId: '203561082194',
  appId: '1:203561082194:web:b9c1ee5c83338d83c16e8b',
  measurementId: 'G-T71FCJKL4Y',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
