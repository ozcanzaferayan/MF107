import { auth, db } from '@/services/firebaseConfig';
import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export type SignupParams = {
  email: string;
  password: string;
};

export const useSignup = () => {
  // useMutation içindeki error gibi kısımları tiplendirmek için
  // <Sunucu Cevabı, Hata, Girdi parametreleri>
  return useMutation<User, FirebaseError, SignupParams>({
    mutationFn: async ({ email, password }: SignupParams) => {
      // 0. Firebase Authentication servisi üzerinden yeni bir kullanıcı açar
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Veritabanına da yazmak için
      // 1. Yeni oluşturacağımız users tablosunun referansı alınır
      const usersRef = collection(db, 'users');
      // 2. user kaydı veritabanına yazılır
      await addDoc(usersRef, {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        createdDate: serverTimestamp(),
      });
      return user;
    },
  });
};
