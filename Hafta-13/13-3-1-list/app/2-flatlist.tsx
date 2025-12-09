// rnfe

import React from 'react';
import { FlatList, Text } from 'react-native';

const Index = () => {
  const numbers = [...Array(100000).keys()];
  return (
    <FlatList
      data={numbers}
      keyExtractor={(value) => value.toString()}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};

export default Index;
