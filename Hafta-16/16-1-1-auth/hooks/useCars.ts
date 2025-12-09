import { db } from '@/services/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';

export type Car = {
  id: string;
  brand: string;
  model: string;
  createdAt: string;
};

export const useCars = () => {
  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: async () => {
      // Giriş yapmış olan kullanıcıya ait arabalar listelenecektir
      const strUser = await AsyncStorage.getItem('user');
      // Kullanıcı yoksa catch'e düşmesini sağlamak için hata fırlatıyoruz
      if (!strUser) {
        throw new Error('Kullanıcı giriş yapmadı');
      }
      const user = JSON
      .parse(strUser);
      // Araba tablosunun referansı getirilir
      const carsRef = collection(db, 'cars');
      const q = query(carsRef, where('uid', '==', user.uid));
      const snapshot = await getDocs(q);
      const cars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return cars as Car[];
    },
  });
};
