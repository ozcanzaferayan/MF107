import { db } from '@/services/firebaseConfig';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';
import { Student } from './useStudents';

export const useAddStudent = () => {
  // 1. Ekleme sonrası cache temizlememiz lazım.
  //   Bu nedenle mevcut queryClient'ı çekmemiz gerekiyor
  const queryClient = useQueryClient();

  // 2. Ekleme/Çıkarma/Düzenleme gibi bir değişiklik yapacağımız içın
  //   mutation kullanıyoruz.
  return useMutation({
    mutationFn: async (student: Omit<Student, 'id'>) => {
      // 3. Tablonun referansı için studentsRef alıcaz
      const studentsRef = collection(db, 'students');
      await addDoc(studentsRef, student);
    },
    onSuccess: () => {
      // 4. Tekrar data çekilsin diye cache temizlenir
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};
