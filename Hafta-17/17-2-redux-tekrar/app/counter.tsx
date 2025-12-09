// rnfe
import { Button } from '@/components/Button';
import MyComponent from '@/components/MyComponent';
import { useCounter } from '@/slices/counterSlice';
import { store } from '@/store/store';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { count, decrement, increment, incrementByValue } = useCounter();

  return (
    <View>
      <Text className="text-6xl">{count}</Text>
      <Button title="Arttir" onPress={increment} />
      <Button title="5'er arttir" onPress={() => incrementByValue(5)} />
      <MyComponent />
      <Text>{store.getState().counter.count}</Text>
      <Link href={'/details'}>Detaya Git</Link>
    </View>
  );
};

export default Index;
