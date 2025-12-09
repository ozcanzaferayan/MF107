import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function useAsyncStorage<T>(key: string) {
  const [value, setValue] = useState<T | null>(null);
  // AsyncStorage'tan veri çekerken yavaş olduğu için bir loader koyuyoruz
  const [isLoading, setIsLoading] = useState(true);

  // uffs
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((data) => {
        if (data) {
          setValue(JSON.parse(data));
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  // AsyncStorage'a kaydetme/yazma
  const saveValue = async (newValue: T) => {
    await AsyncStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  // AsyncStorage'dan silme
  const removeValue = async () => {
    AsyncStorage.removeItem(key).then(() => setValue(null));
  };

  return { value, saveValue, isLoading, removeValue };
}
