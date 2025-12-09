import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

// 0. Product type oluştur
export type Product = {
  id: number;
  title: string;
};
const Index = () => {
  // 1. usss ile ürünleri tut
  const [products, setProducts] = useState<Product[]>([]);

  // 2. uffs ile API'den çek
  useEffect(() => {
    const API_URL = 'https://fakestoreapi.com/products';
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // 3. FlatList ile listele
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id.toString()}
      renderItem={({ item }) => <Link href={'/products'}>{item.title}</Link>}
    />
  );
};

export default Index;
