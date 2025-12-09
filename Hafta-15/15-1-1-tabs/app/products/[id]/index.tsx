import { useProduct } from '@/hooks/useProduct';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { id } = useLocalSearchParams();
  const { data: product } = useProduct(parseInt(id as string));

  return (
    <View>
      <Text>{product?.title}</Text>
    </View>
  );
};

export default Index;
