// rnfe
import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        autoPlay
        style={{
          width: 300,
          height: 200,
        }}
        source={require('../assets/paperplane.json')}
      />
      <Text className="text-2xl font-semibold">Gönderiliyor...</Text>
    </View>
  );
};

export default Index;
