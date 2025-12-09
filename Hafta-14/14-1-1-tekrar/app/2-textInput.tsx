// rnfe

import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Index = () => {
  // 1. usss ile metin
  const [metin, setMetin] = useState('');

  return (
    <View className="gap-4 p-4">
      <Text>Adınızı giriniz:</Text>
      <TextInput
        className="border-2 p-4 text-2xl"
        placeholder="Isminiz"
        onChangeText={(text) => setMetin(text)}
      />
      <Text>{metin}</Text>
    </View>
  );
};

export default Index;
