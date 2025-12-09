import { useProduct } from '@/hooks/useProduct';
import { useUpdateProduct } from '@/hooks/useUpdateProduct';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Edit = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: product } = useProduct(id);

  const [title, setTitle] = useState(product?.title || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [image, setImage] = useState(product?.image || '');

  const { mutate: updateProduct } = useUpdateProduct();

  const handleUpdate = () => {
    updateProduct({
      id,
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
      <Text onPress={handleUpdate} className="self-start bg-blue-500 p-4 text-white">
        Kaydet
      </Text>
    </View>
  );
};

export default Edit;
