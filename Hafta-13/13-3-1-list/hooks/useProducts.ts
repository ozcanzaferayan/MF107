import { storeApi } from '@/api/storeApi';
import { useQuery } from '@tanstack/react-query';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => storeApi.get<Product[]>('/products').then((res) => res.data),
    staleTime: 1000 * 60, // 1dk cache süresi
  });
};
