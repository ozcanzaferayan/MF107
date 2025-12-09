import { Button } from '@/components/Button';
import { useCounter } from '@/slices/counterSlice';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { count, increment, incrementByValue } = useCounter();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Arttır" onPress={() => increment()} />
      <Button title="5 Arttır" onPress={() => incrementByValue(5)} />
    </View>
  );
};

export default Index;
