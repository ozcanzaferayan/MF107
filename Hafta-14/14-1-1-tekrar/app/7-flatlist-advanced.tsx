// rnfe

import Card from '@/components/Card';
import React, { useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';

const Index = () => {
  const data = [
    {
      iconName: 'dog',
      text: 'Köpek',
    },
    {
      iconName: 'cat',
      text: 'Kedi',
    },
    {
      iconName: 'horse',
      text: 'At',
    },
    {
      iconName: 'bug',
      text: 'Böcek',
    },
  ];

  // Yükleniyor mu?
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(icon) => icon.iconName}
        renderItem={({ item }) => <Card iconName={item.iconName} text={item.text} />}
        contentContainerClassName="gap-4 p-4"
        horizontal={false}
        numColumns={2}
        columnWrapperClassName="gap-4"
        ListHeaderComponent={() => <Text>Header</Text>}
        ListFooterComponent={() => <Text>Footer</Text>}
        ListEmptyComponent={() => <Text>Data yok</Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
          />
        }
      />
    </View>
  );
};

export default Index;
