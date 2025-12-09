// rnfe

import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Index = () => {
  // usss
  const [metin, setMetin] = useState('');
  return (
    <View>
      <TextInput value={metin} onChangeText={(text) => setMetin(text)} />
      <Text>{metin}</Text>
    </View>
  );
};

export default Index;
