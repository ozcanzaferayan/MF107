// rnfe

import { useUsers } from '@/hooks/useUsers';
import React from 'react';
import { FlatList, Text } from 'react-native';

const Index = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) return <Text>Yükleniyor</Text>;
  if (isError) return <Text>Hata oluştu</Text>;

  return (
    <FlatList
      data={users}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default Index;
