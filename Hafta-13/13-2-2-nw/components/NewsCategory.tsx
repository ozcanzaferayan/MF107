import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, ImageSourcePropType, Text } from 'react-native';

export type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

type Props = {
  category: Category;
};

const NewsCategory = ({ category }: Props) => {
  return (
    <Link href={'/news-detail'}>
      <ImageBackground
        style={{ height: 100 }}
        source={category.image}
        className="h-24 w-full items-center justify-center"
        resizeMode="cover">
        <Text className="text-3xl font-semibold text-white shadow">{category.name}</Text>
      </ImageBackground>
    </Link>
  );
};

export default NewsCategory;
