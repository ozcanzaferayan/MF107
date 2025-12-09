// rnfe

import { Button } from '@/components/Button';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const [sayi, setSayi] = useState(0);

  const handleButton = (islem: string) => {
    switch (islem) {
      case 'ARTTIR': {
        setSayi(sayi + 1);
        return;
      }
      case 'AZALT': {
        setSayi(sayi - 1);
        return;
      }
      case 'RESETLE': {
        setSayi(0);
        return;
      }
    }
  };

  return (
    <View>
      <Text>{sayi}</Text>
      <Button title="Arttır" onPress={() => handleButton('ARTTIR')} />
      <Button title="Azalt" onPress={() => handleButton('AZALT')} />
      <Button title="Resetle" onPress={() => handleButton('RESETLE')} />
    </View>
  );
};

export default Index;
