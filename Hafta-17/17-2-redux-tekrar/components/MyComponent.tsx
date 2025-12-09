// rnfe

import { useCounter } from '@/slices/counterSlice';
import React from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const { count } = useCounter();
  return (
    <View>
      <Text className="text-6xl text-red-500">{count}</Text>
    </View>
  );
};

export default MyComponent;
