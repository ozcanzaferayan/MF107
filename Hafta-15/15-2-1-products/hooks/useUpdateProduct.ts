import { db } from '@/services/firebaseConfig';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { doc, updateDoc } from 'firebase/firestore';
import { Product } from './useProducts';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (product: Product) => {
      // 1. Doc ref'ini getir
      const productRef = doc(db, 'products', product.id);
      // 2. updateDoc ile güncelle
      await updateDoc(productRef, product);
    },
    // 3. Tamamlandığında ilgili ürüne ait cache'i temizlemek için
    onSuccess: (_data, product) => {
      // Sadece deta cache'ini silmek için
      queryClient.invalidateQueries({ queryKey: ['products', product.id] });
      // Tüm tablo cache'ini silmek için
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
