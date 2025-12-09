import { useProduct } from '@/hooks/useProduct';
import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: product } = useProduct(id);

  return (
    <View>
      <Text>{product?.id}</Text>
      <Text>{product?.title}</Text>
      <Text>{product?.brand}</Text>
      <Text>{product?.image}</Text>
      <Link className="self-start bg-blue-500 p-4 text-white" href={`/products/${id}/edit`}>
        Düzenle
      </Link>
      <Link className="self-start bg-red-500 p-4 text-white" href={`/products/${id}/delete`}>
        Sil
      </Link>
    </View>
  );
};

export default Index;
