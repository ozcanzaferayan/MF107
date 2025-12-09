import { api } from '@/api/api';
import { User } from '@/app/4-fetch';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  // 1. queryKey: Cache olarak tutacağı key
  // 2. queryFn: Datayı çekeceği fonksiyon
  // 3. staleTime: Cache süresini ms cinsinden tutar

  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => api.get<User[]>('/users').then((res) => res.data),
    staleTime: 1000 * 60, // 1dk cache süresi
  });
};
