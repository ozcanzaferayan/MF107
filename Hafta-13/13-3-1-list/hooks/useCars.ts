import { useQuery } from '@tanstack/react-query';

export type Car = {
  id: string;
  image: string;
  name: string;
};

const cars: Car[] = [
  {
    id: '1',
    image: '',
    name: 'Barış',
  },
  {
    id: '2',
    image: '',
    name: 'Burak',
  },
];

export const useCars = () => {
  // 0. useQuery<Student[]>({}) olarak yaz
  // 1. queryKey: Cache olarak tutacağı key
  // 2. queryFn: Datayı çekeceği fonksiyon
  // 3. staleTime: Cache süresini ms cinsinden tutar

  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: () => Promise.resolve(cars),
    staleTime: 1000 * 60, // 1 dk
  });
};
