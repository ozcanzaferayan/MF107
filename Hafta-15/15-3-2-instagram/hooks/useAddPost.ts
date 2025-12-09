import { db } from '@/services/firebaseConfig';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';

export type Post = {
  id: string;
  imageUrl: string;
  description: string;
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (post: Omit<Post, 'id'>) => {
      const postsRef = collection(db, 'posts');
      await addDoc(postsRef, post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
