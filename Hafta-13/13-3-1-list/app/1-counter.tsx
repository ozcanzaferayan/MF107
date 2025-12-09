// rnfe

import { Button } from '@/components/Button';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  // 1. usss count oluşturucaz
  const [count, setCount] = useState(42);

  // 2. handleIncrease metodu ile arttırcaz
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // 3. Button ve count gösteren metin ekleriz
  return (
    <View>
      <Text className="text-3xl">{count}</Text>
      <Button title="Arttır" onPress={handleIncrease} />
    </View>
  );
};

export default Index;
