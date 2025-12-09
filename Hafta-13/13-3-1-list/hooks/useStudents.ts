import { useQuery } from '@tanstack/react-query';

export type Student = {
  id: string;
  name: string;
};

const students: Student[] = [
  {
    id: '1',
    name: 'Barış',
  },
  {
    id: '2',
    name: 'Burak',
  },
];

export const useStudents = () => {
  // 0. useQuery<Student[]>({}) olarak yaz
  // 1. queryKey: Cache olarak tutacağı key
  // 2. queryFn: Datayı çekeceği fonksiyon
  // 3. staleTime: Cache süresini ms cinsinden tutar

  return useQuery<Student[]>({
    queryKey: ['students'],
    queryFn: () => Promise.resolve(students),
    staleTime: 1000 * 60, // 1 dk
  });
};
