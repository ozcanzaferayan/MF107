// rnfe

import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

const Index = () => {
  return (
    <View>
      <ImageBackground
        source={require('@/assets/cat.jpg')}
        style={{ width: 300, height: 300, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text
          className="mb-4 text-4xl font-bold text-black
        ">
          KÜSTÜN MÜ?
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Index;
