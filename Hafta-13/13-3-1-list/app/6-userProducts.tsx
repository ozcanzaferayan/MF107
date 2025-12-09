// rnfe

import { useProducts } from '@/hooks/useProducts';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const Index = () => {
  const { data: products } = useProducts();

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.image }} className="h-24 w-24" />
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default Index;
