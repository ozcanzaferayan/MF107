import { useAddProduct } from '@/hooks/useAddProduct';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Index = () => {
  // usss
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [image, setImage] = useState('');

  const { mutate: addProduct } = useAddProduct();

  const handleAdd = () => {
    addProduct({
      title,
      brand,
      image,
    });
    router.back();
  };

  return (
    <View>
      <TextInput
        className="border p-4"
        placeholder="Title giriniz"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="border p-4"
        placeholder="Brand giriniz"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        className="border p-4"
        placeholder="Image giriniz"
        value={image}
        onChangeText={setImage}
      />
      <Text onPress={handleAdd} className="self-start bg-blue-500 p-4 text-white">
        Kaydet
      </Text>
    </View>
  );
};

export default Index;
