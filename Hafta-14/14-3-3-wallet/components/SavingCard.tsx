import React from 'react';
import { Text, View } from 'react-native';

const SavingCard = () => {
  return (
    <View className="gap-4 rounded bg-white p-4 pt-6 shadow-sm">
      <Text className="text-slate-700">Saving, March 2024</Text>
      <Text className="text-4xl font-semibold text-black">$1,545.89</Text>
      <View className="gap-4">
        {/* Earned */}
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Text className="text-slate-700">Earned</Text>
            <Text className="text-slate-700">$10,000.00</Text>
          </View>
          <View>
            <View className="h-3 w-full bg-slate-200"></View>
            <View className="absolute h-3 w-9/12 bg-green-500"></View>
          </View>
        </View>
        {/* Spent */}
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Text className="text-slate-700">Spent</Text>
            <Text className="text-slate-700">$8,548.00</Text>
          </View>
          <View>
            <View className="h-3 w-full bg-slate-200"></View>
            <View className="absolute h-3 w-6/12 bg-orange-500"></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SavingCard;
