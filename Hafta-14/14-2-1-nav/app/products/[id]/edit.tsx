import { Button } from '@/components/Button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Product } from '..';

const Edit = () => {
  // 1. useRouter ile redirect işlemleri yapıcaz
  const router = useRouter();
  // 2. useLocalSearchParams ile id'yi çek
  const { id } = useLocalSearchParams();
  // 3. usss ile urün bilgisini tut=
  const [product, setProduct] = useState<Product>();

  // 4. uffs ile id ye göre ürünü getir
  useEffect(() => {
    const API_URL = `https://fakestoreapi.com/products/${id}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // 5. handleEdit yapıcaz. dismissTo ile ürünlere yönlendiricez
  const handleEdit = () => {
    const API_URL = `https://fakestoreapi.com/products/${id}`;
    fetch(API_URL, {
      method: 'PUT',
      headers: {
        ContentType: 'application/json',
      },
      body: JSON.stringify(product),
    }).then(() => {
      router.dismissTo('/products');
    });
  };

  if (!product) {
    return <Text>Bulunamadı...</Text>;
  }

  // 6. TextInputlarla formu doldurucaz
  return (
    <View>
      <TextInput
        value={product.title}
        onChangeText={(text) => setProduct({ ...product, title: text })}
      />
      <TextInput
        value={product.image}
        onChangeText={(text) => setProduct({ ...product, image: text })}
      />
      <Button title="Kaydet" onPress={handleEdit} />
    </View>
  );
};

export default Edit;
