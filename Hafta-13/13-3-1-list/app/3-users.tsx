// rnfe

import React from 'react';
import { FlatList, Text } from 'react-native';

const Index = () => {
  const users = [
    {
      id: '1',
      name: 'Burak',
    },
    {
      id: '2',
      name: 'Emre',
    },
  ];

  return (
    <FlatList
      data={users}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default Index;
