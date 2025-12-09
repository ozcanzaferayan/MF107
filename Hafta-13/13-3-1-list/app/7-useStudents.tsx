import { useStudents } from '@/hooks/useStudents';
import React from 'react';
import { FlatList, Text } from 'react-native';

const Index = () => {
  const { data: students } = useStudents();

  return (
    <FlatList
      data={students}
      keyExtractor={(student) => student.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default Index;
