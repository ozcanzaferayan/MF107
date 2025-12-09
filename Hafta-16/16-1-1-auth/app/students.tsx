import { Button } from '@/components/Button';
import { useSignout } from '@/hooks/useSignout';
import { useStudents } from '@/hooks/useStudents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

const Students = () => {
  const { data: students } = useStudents();
  const { mutateAsync: signOut } = useSignout();

  const handleLogout = () => {
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
        data={students}
        keyExtractor={(student) => student.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Image source={{ uri: item.image }} style={{ height: 100, width: '100%' }} />
            <Text>
              {item.name} {item.surname}
            </Text>
          </View>
        )}
      />

      <Link href={'/add'} asChild>
        <TouchableOpacity className="absolute bottom-12 right-4 h-16 w-16 items-center justify-center rounded-full bg-blue-500 p-4">
          <Text className="text-2xl text-white">+</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Students;
