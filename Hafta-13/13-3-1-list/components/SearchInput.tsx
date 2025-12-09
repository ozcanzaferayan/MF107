import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { TextInput, View } from 'react-native';
const SearchInput = () => {
  return (
    <View className="flex-row gap-2 rounded-xl bg-white px-4 py-2">
      <MaterialIcons name="search" size={24} color="#555" />
      <TextInput placeholder="Search for anything..." />
    </View>
  );
};

export default SearchInput;
