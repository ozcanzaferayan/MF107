import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const ServicesContainer = () => {
  return (
    <ScrollView horizontal={true} className="mt-4" contentContainerClassName="gap-4">
      <View className="flex-row items-center gap-2 rounded bg-slate-200 px-4 py-2">
        <MaterialIcons name="home-repair-service" size={24} color="black" />
        <Text>Repairing</Text>
      </View>
      <View className="flex-row items-center gap-2 rounded bg-slate-200 px-4 py-2">
        <MaterialIcons name="cleaning-services" size={24} color="black" />
        <Text>Cleaning</Text>
      </View>
      <View className="flex-row items-center gap-2 rounded bg-slate-200 px-4 py-2">
        <MaterialIcons name="local-laundry-service" size={24} color="black" />
        <Text>Laundry</Text>
      </View>
      <View className="flex-row items-center gap-2 rounded bg-slate-200 px-4 py-2">
        <MaterialIcons name="local-laundry-service" size={24} color="black" />
        <Text>Laundry</Text>
      </View>
    </ScrollView>
  );
};

export default ServicesContainer;
