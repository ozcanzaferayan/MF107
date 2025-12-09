import { db } from '@/services/firebaseConfig';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';

export type Product = {
  id: string;
  brand: string;
  title: string;
  image: string;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      // 1. Tablonun ref'ini getirelim
      const productsRef = collection(db, 'products');
      // 2. Snapshot çekicez
      const snapshot = await getDocs(productsRef);
      // 3. map metoduyla snapshot üzerinde gezinicez
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      // 4. return et
      return products as Product[];
    },
  });
};
