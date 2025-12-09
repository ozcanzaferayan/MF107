import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
const TopSpendingCard = () => {
  const data = [
    {
      iconName: 'building',
      title: 'Home Rent',
      color: 'purple',
    },
    {
      iconName: 'graduation-cap',
      title: 'Education',
      color: 'dodgerblue',
    },
    {
      iconName: 'car',
      title: 'Transport',
      color: 'mediumseagreen',
    },
  ];
  return (
    <View className="gap-4 pt-4">
      {/* Top Spending text */}
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-semibold">Top Spending</Text>
        <Text className="text-base font-semibold text-blue-500">View All</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.title.toString()}
        renderItem={({ item }) => (
          <View className="my-4 items-center justify-center gap-4 rounded bg-white p-8 shadow-sm">
            <FontAwesome5 name={item.iconName} size={24} color={item.color} />
            <Text className="font-semibold">{item.title}</Text>
          </View>
        )}
        horizontal={true}
        contentContainerClassName="gap-8"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopSpendingCard;
