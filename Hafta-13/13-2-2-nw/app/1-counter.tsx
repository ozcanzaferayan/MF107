// rnfe
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Index = () => {
  // usss
  const [sayi, setSayi] = useState(0);

  const handleArttir = () => {
    setSayi(sayi + 1);
  };
  return (
    <TouchableOpacity onPress={handleArttir} className="items-center rounded bg-blue-500 p-4">
      <Text className="text-3xl text-white">Arttır {sayi}</Text>
    </TouchableOpacity>
  );
};

export default Index;
