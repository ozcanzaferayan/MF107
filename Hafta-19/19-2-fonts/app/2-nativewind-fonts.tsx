// rnfe

import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  return (
    <View>
      <Text className="font-lobster text-4xl">Ozkardeşler Kebap Evi</Text>
      <Text className="font-inter text-4xl">Inter</Text>
      <Text className="font-inter text-4xl font-bold">Inter</Text>
      <Text className="font-inter text-4xl font-light">Inter</Text>
      <Text style={{ fontFamily: 'SourGummy_700Bold', fontSize: 42 }}>Kawaii</Text>
      <Text style={{ fontFamily: 'SourGummy_300Light', fontSize: 42 }}>Kawaii</Text>
      <Text className="font-sourgummy-thin text-4xl">Kawaii</Text>
      <Text className="font-sourgummy-black text-4xl text-blue-500">Kawaii</Text>
    </View>
  );
};

export default Index;
