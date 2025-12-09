// rnfe

import { useGetFoodsQuery } from '@/slices/foodApi';
import React from 'react';
import { Text, View } from 'react-native';

export type Food = {
  id: string;
  name: string;
};

const Index = () => {
  const { data: foods } = useGetFoodsQuery();

  return (
    <View>
      {foods?.map((food) => (
        <Text key={food.id}>{food.name}</Text>
      ))}
    </View>
  );
};

export default Index;
