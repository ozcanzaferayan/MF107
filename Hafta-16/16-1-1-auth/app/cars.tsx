import { Button } from '@/components/Button';
import { useCars } from '@/hooks/useCars';
import { useSignout } from '@/hooks/useSignout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const Cars = () => {
  const { data: cars } = useCars();
  const { mutateAsync: signOut } = useSignout();

  const handleLogout = async () => {
    // 1. Firebase'den çıkış yap
    signOut().then(() => {
      // 2. Kullanıcıyı local'den sil (tekrar login'e yönlendirmesin diye)
      AsyncStorage.removeItem('user').then(() => {
        router.replace('/');
      });
    });
  };

  return (
    <View className="flex-1">
      <Button title="Çıkış Yap" onPress={handleLogout} />
      <FlatList
        data={cars}
        keyExtractor={(car) => car.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.brand} {item.model}
            </Text>
          </View>
        )}
      />
      <Link href={'/addCar'} asChild>
        <TouchableOpacity className="absolute bottom-12 right-4 h-16 w-16 items-center justify-center rounded-full bg-blue-500 p-4">
          <Text className="text-2xl text-white">+</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Cars;
