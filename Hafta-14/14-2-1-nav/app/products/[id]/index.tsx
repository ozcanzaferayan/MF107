import { Product } from '@/app/products';
import { Button } from '@/components/Button';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

const Index = () => {
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

  // 4. Ürün detayı görüntülenir
  return (
    <View>
      <Text>{product.id}</Text>
      <Text>{product.title}</Text>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <Link href={`/products/${id}/edit`} asChild>
        <Button title="Düzenle" />
      </Link>
      <Link href={`/products/${id}/delete`} asChild>
        <Button title="Sil" />
      </Link>
    </View>
  );
};

export default Index;
