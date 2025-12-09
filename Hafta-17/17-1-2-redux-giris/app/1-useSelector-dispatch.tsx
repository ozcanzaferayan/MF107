import { Button } from '@/components/Button';
import { increment } from '@/slices/counterSlice';
import { RootState, useAppDispatch } from '@/store/store';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Index = () => {
  // selector
  // Component tekrar rerender edebilsin ve count değerini otomatik ekrana yansıtsın diye
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Arttır" onPress={() => dispatch(increment())} />
    </View>
  );
};

export default Index;
