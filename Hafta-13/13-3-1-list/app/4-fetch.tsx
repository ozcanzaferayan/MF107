// rnfe

import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

// 0. User type oluştur ve export et
export type User = {
  id: string;
  name: string;
};

const Index = () => {
  // 1. usss ile users state oluştur
  const [users, setUsers] = useState<User[]>([]);

  // 2. uffs ile API'den veri çek ve state'e ata
  useEffect(() => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  // 3. FlatList ile göster
  return (
    <FlatList
      data={users}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default Index;
