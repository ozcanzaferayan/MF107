// rnfe

import { Button } from '@/components/Button';
import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

// 0. Product type oluştur ve export et
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

const Index = () => {
  // 1. useRouter'ı import et
  const router = useRouter();
  // 2. usss ile products oluştur
  const [products, setProducts] = useState<Product[]>([]);

  // 3. uffs ile API_URL'den verileri çek ve state'e aktar
  useEffect(() => {
    const API_URL = 'https://fakestoreapi.com/products';
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // 4. FlatList ile listele
  return (
    <View>
      <Link
        href={'/products/add'}
        className="absolute bottom-12 right-4 z-10 items-center justify-center rounded-full bg-blue-500 p-6 shadow">
        <TouchableOpacity>
          <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>
      </Link>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => (
          <Button title={item.title} onPress={() => router.navigate(`/products/${item.id}`)} />
        )}
      />
    </View>
  );
};

export default Index;
