import { Button } from '@/components/Button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Product } from '..';

const Delete = () => {
  // 0. router alınır
  const router = useRouter();
  // 1. useLocalParams ile id alınır
  const { id } = useLocalSearchParams();

  // 2. usss ile product'ı tutulur
  const [product, setProduct] = useState<Product>();

  // 3. uffs ile ürün detayı çekilir
  useEffect(() => {
    const API_URL = `https://fakestoreapi.com/products/${id}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (product === undefined) {
    return <Text>Ürün bulunamadı</Text>;
  }

  // 4. handleDelete ile ürün silme
  const handleDelete = () => {
    const API_URL = `https://fakestoreapi.com/products/${id}`;
    fetch(API_URL, {
      method: 'DELETE',
    }).then(() => {
      router.dismissTo('/products');
    });
  };

  // 5. ürün detayları görüntülenir
  return (
    <View>
      <Text>{product.id}</Text>
      <Text>{product.title}</Text>
      <Button title="Emin misiniz" onPress={handleDelete} />
    </View>
  );
};

export default Delete;
