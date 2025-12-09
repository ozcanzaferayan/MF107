// rnfe

import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

// 0. Product Type oluştur
export type Product = {
  id: number;
  title: string;
  image: string;
};

const Index = () => {
  // 1. usss ile products oluştur
  const [products, setProducts] = useState<Product[]>([]);

  // 2. uffs ile ürünleri çek
  useEffect(() => {
    const API_URL = 'https://fakestoreapi.com/products';

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // 3. FlatList ile listele
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 gap-2 rounded bg-white p-4 shadow-sm">
            <Image style={{ width: '100%', height: 200 }} source={{ uri: item.image }} />
            <Text className="text-lg">{item.title}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerClassName="gap-4 p-4"
        columnWrapperClassName="gap-4"
      />
    </View>
  );
};

export default Index;
