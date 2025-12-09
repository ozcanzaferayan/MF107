// rnfe
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  // usss
  const [toplam, setToplam] = useState(0);
  const sayilar = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    setToplam(
      sayilar.reduce((toplam, sayi) => {
        return toplam + sayi;
      }, 0)
    );
  }, []);

  return (
    <View>
      <Text className="text-6xl">{toplam}</Text>
    </View>
  );
};

export default Index;
