// rnfe

import React from 'react';
import { Image, Text, View } from 'react-native';

const HeroCard = () => {
  return (
    <View className="mt-4 rounded-2xl bg-slate-200 p-8">
      <Text className="text-2xl font-semibold text-slate-800">
        You are in good {'\n'} hands with us
      </Text>
      <Text className="font-base mt-4 text-base text-slate-500">
        We are delighted to provide {'\n'} the best services
      </Text>
      <Image
        source={require('@/assets/tools.png')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          right: 32,
          top: 4,
          resizeMode: 'cover',
          width: 128,
          height: 197,
        }}
      />
    </View>
  );
};

export default HeroCard;
