import { db } from '@/services/firebaseConfig';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';
import { Product } from './useProducts';

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (product: Omit<Product, 'id'>) => {
      // 1. Tablonun ref'ini getir
      const prodcutsRef = collection(db, 'products');
      // 2. addDoc ile ekle
      await addDoc(prodcutsRef, product);
    },
    // 3. Tamamlandığında cache'i temizlemek için
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
