// rnfe

import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Index = () => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(sayi) => sayi.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Index;
