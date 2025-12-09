// rnfe

import { Button } from '@/components/Button';
import { useCounter } from '@/hooks/counterReducer';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { count, increment, incrementByValue, ekranaYaz } = useCounter(42);

  return (
    <View>
      <Button title="Arttır" onPress={increment} />
      <Button title="5'er Arttir" onPress={() => incrementByValue(5)} />
      <Button title="Konsola Yaz" onPress={() => ekranaYaz('Hello World')} />
      <Text>{count}</Text>
    </View>
  );
};

export default Index;
