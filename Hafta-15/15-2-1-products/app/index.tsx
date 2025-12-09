import { useProducts } from '@/hooks/useProducts';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { data: products } = useProducts();

  return (
    <View>
      {products?.map((product) => (
        <View key={product.id}>
          <Text>{product.title}</Text>
          <Link className="self-start bg-blue-500 p-4 text-white" href={`/products/${product.id}`}>
            Detaya Git
          </Link>
        </View>
      ))}
      <Link className="self-start bg-green-500 p-4 text-white" href={'/products/add'}>
        Ekle
      </Link>
    </View>
  );
};

export default Index;
