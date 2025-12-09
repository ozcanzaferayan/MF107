// rnfe

import { Button } from '@/components/Button';
import { useAddCar } from '@/hooks/useAddCar';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const Add = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const { mutate: addCar } = useAddCar();

  const handleAdd = () => {
    addCar({ brand, model });
    router.back();
  };

  return (
    <View className="gap-4">
      <TextInput
        className="border p-4"
        placeholder="Marka giriniz"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        className="border p-4"
        placeholder="Model giriniz"
        value={model}
        onChangeText={setModel}
      />
      <Button title="Araba ekle" onPress={handleAdd} />
    </View>
  );
};

export default Add;
