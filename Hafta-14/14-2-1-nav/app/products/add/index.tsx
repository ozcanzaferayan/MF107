import { Button } from '@/components/Button';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const Index = () => {
  // 0. useRouter kullan
  const router = useRouter();

  // 1. usss ile state oluştur
  const [name, setName] = useState('iPhone 17 Pro');
  const [image, setImage] = useState('http://example.com');

  // 2. handleAdd ile ürün ekleme yaptık ve ürünler sayfasına geri döndürdük
  const handleAdd = () => {
    const API_URL = 'https://fakestoreapi.com/products';
    fetch(API_URL, {
      method: 'POST',
      headers: {
        ContentType: 'application/json',
      },
      body: JSON.stringify({
        name,
        image,
      }),
    }).then(() => {
      router.dismissTo('/products');
    });
  };

  // 3. formu oluşturduk
  return (
    <View>
      <TextInput value={name} onChangeText={setName} />
      <TextInput value={image} onChangeText={setImage} />
      <Button title="Ekle" onPress={handleAdd} />
    </View>
  );
};

export default Index;
