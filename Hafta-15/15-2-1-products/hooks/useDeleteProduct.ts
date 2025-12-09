import { db } from '@/services/firebaseConfig';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDoc, doc } from 'firebase/firestore';

export const useDeleteProduct = () => {
  // 0. queryClient'ı çek => Daha sonra invalidate etmek için
  const queryClient = useQueryClient();

  return useMutation({
    // 1. mutationFn ile Silecek kodu yaz
    mutationFn: async (id: string) => {
      const productRef = doc(db, 'products', id);
      await deleteDoc(productRef);
    },
    // 2. onSuccess işleminde query'i invalidate et
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
