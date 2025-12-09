import { db } from '@/services/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Car } from './useCars';

export const useAddCar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (car: Omit<Car, 'id' | 'uid' | 'createdAt'>) => {
      const strUser = await AsyncStorage.getItem('user');
      if (!strUser) {
        throw new Error('Kullanıcı giriş yapmadı');
      }
      const user = JSON.parse(strUser) as User;
      const carsRef = collection(db, 'cars');
      await addDoc(carsRef, {
        uid: user.uid,
        createdAt: serverTimestamp(),
        ...car,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    },
  });
};
