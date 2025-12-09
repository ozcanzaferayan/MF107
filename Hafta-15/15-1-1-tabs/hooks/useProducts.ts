import { api } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export type Product = {
  id: number;
  title: string;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => api
        .get<Product[]>('/products')
        .then((res) => res.data),
  });
};
