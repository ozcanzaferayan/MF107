// rnfe
import { Ecosystem, MobileApp, OnTheWay } from '@/src/icons';
import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';

const SLIDES = [
  {
    id: 1,
    title: 'Kolay kullanım',
    description: 'Modern ve sezgisel mobil arayüz ile hızlıca uygulamayı keşfet',
    icon: MobileApp,
  },
  {
    id: 2,
    title: 'Her Yerde Yanında',
    description: 'Hareket halindeyken bile tüm özelliklere kolayca eriş',
    icon: OnTheWay,
  },
  {
    id: 3,
    title: 'Güçlü Ekosistem',
    description: 'Zengin özellik seti ile her ihtiyaca yönelik çözüm sunar',
    icon: Ecosystem,
  },
];

const Index = () => {
  const width = Dimensions.get('screen').width;
  return (
    <FlatList
      data={SLIDES}
      keyExtractor={(slide) => slide.id.toString()}
      horizontal
      pagingEnabled
      contentContainerClassName="bg-white"
      renderItem={({ item }) => {
        const Icon = item.icon;
        return (
          <View style={{ width }} className="items-center justify-center gap-3 p-6">
            <Icon width={300} height={300} />
            <Text className="text-center text-2xl font-bold">{item.title}</Text>
            <Text className="text-center text-base text-gray-600">{item.description}</Text>
          </View>
        );
      }}
    />
  );
};

export default Index;
