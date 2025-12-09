import { useDeleteProduct } from '@/hooks/useDeleteProduct';
import { useProduct } from '@/hooks/useProduct';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Delete = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: product } = useProduct(id);

  const { mutate: deleteProduct } = useDeleteProduct();

  const handleDelete = () => {
    deleteProduct(id);
    // Geri tuşunun çıkmasını engellemek için
    // Tüm history'i siler
    router.dismissAll();
  };

  return (
    <View>
      <Text>ProductID: {id} olan ürün silinsin mi</Text>
      <Text onPress={handleDelete} className="self-start bg-red-500 p-4 text-white">
        Evet
      </Text>
    </View>
  );
};

export default Delete;
