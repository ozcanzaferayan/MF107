import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
const MonthlyBudgetCard = () => {
  const data = [
    {
      iconName: 'building',
      title: 'Home Rent',
      iconColor: 'white',
      iconBackgroundColor: 'purple',
      backgroundColor: '#ebccff',
      spending: '$50 per day',
    },
    {
      iconName: 'graduation-cap',
      title: 'Education',
      color: 'dodgerblue',
      iconColor: 'white',
      iconBackgroundColor: 'dodgerblue',
      backgroundColor: '#cce0ff',
      spending: '$50 per day',
    },
    {
      iconName: 'car',
      title: 'Transport',
      iconColor: 'white',
      iconBackgroundColor: 'mediumseagreen',
      backgroundColor: '#00e6e6',
      spending: '$50 per day',
    },
  ];
  return (
    <View className="gap-4 pt-4">
      {/* Top Spending text */}
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-semibold">Monthly Budget</Text>
        <Text className="text-base font-semibold text-blue-500">See All</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.title.toString()}
        renderItem={({ item }) => (
          <View
            className="flex-row items-center gap-4 rounded bg-white p-8 shadow-sm"
            style={{ backgroundColor: item.backgroundColor }}>
            <View className="rounded-2xl p-4" style={{ backgroundColor: item.iconBackgroundColor }}>
              <FontAwesome5 name={item.iconName} size={24} color={item.iconColor} />
            </View>
            <View className="gap-1">
              <Text className="font-semibold">{item.title}</Text>
              <Text className="font-base">{item.spending}</Text>
            </View>
          </View>
        )}
        horizontal={false}
        contentContainerClassName="gap-4"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MonthlyBudgetCard;
