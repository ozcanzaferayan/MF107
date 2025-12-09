// rnfe
import React, { useState } from 'react';
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  // 1. usss sayı ekle
  const [sayi, setSayi] = useState(42);

  // 2. handleIncrement metodunu yaz
  const handleIncrement = () => {
    setSayi(sayi + 1);
  };

  // 3. Button ekle ve Görüntüle
  // Button: Sistemin kendi button elemanı. (stiline müdahale edemiyoruz)
  // TouchableOpacity: Ozel buton oluşturmayı sağlar (RN içinde bulunur)
  // Pressable: Basınca size bir değişiklik oluşturmaz
  return (
    <View>
      {/* Sistem butonu istiyorsan, classname işlemez */}
      {/* Android/Web: Material Design tasarım sistemnini kullanır */}
      {/* iOS: Human Interface Guideline tasarım sistemini kullanır */}
      <Button title={sayi.toString()} onPress={handleIncrement} color={'red'} />

      {/* Genelde Custom button için ToucbhableOpacity */}
      <TouchableOpacity
        onPress={handleIncrement}
        className="
    self-center rounded bg-blue-500 p-4
    ">
        <Text className="text-2xl font-semibold text-white">{sayi} </Text>
      </TouchableOpacity>

      {/* Gelişmiş seçenekler için: */}
      <Pressable
        onPress={handleIncrement}
        className="
      self-center rounded bg-blue-500 p-4
      ">
        <Text className="text-2xl font-semibold text-white">{sayi} </Text>
      </Pressable>
    </View>
  );
};

export default Index;
