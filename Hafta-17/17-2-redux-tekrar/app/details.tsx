// rnfe

import { useCounter } from '@/slices/counterSlice';
import { store } from '@/store/store';
import React from 'react';
import { Text, View } from 'react-native';

const Details = () => {
  const { count } = useCounter();
  return (
    <View>
      <Text>{count}</Text>
      <Text>{store.getState().counter.count}</Text>
    </View>
  );
};

export default Details;
