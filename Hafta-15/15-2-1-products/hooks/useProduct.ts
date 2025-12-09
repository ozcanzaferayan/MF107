import { db } from '@/services/firebaseConfig';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { Product } from './useProducts';

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      // 1. Document ref'i getirilir
      const productRef = doc(db, 'products', id);
      // 2. Snapshot getirilir
      const snapshot = await getDoc(productRef);
      // 3. Snapshot'tan product oluşturulur
      const product = {
        id: snapshot.id,
        ...snapshot.data(),
      } as Product;

      return product;
    },
  });
};
