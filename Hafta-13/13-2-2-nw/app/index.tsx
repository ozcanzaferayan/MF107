// rnfe

import NewsCategory from '@/components/NewsCategory';
import { categories } from '@/data/categories';
import React from 'react';
import { ScrollView } from 'react-native';

const Index = () => {
  return (
    <ScrollView>
      {categories.map((category) => (
        <NewsCategory category={category} key={category.id} />
      ))}
    </ScrollView>
  );
};

export default Index;
