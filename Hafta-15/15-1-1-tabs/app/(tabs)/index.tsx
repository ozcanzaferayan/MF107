import { useProducts } from '@/hooks/useProducts';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const Index = () => {
  const { data: products } = useProducts();

  return (
    <View>
      {products?.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          {product.title}
        </Link>
      ))}
    </View>
  );
};

export default Index;
