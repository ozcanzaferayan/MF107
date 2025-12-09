import { db } from '@/services/firebaseConfig';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { Post } from './useAddPost';

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const postsRef = collection(db, 'posts');
      const snapshot = await getDocs(postsRef);
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return posts as Post[];
    },
  });
};
