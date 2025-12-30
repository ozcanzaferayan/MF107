// rnfe

import React from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const Index = () => {
  const pozisyon = useSharedValue({ x: 0, y: 0 });
  const startPozisyon = useSharedValue({ x: 0, y: 0 });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: pozisyon.value.x }, { translateY: pozisyon.value.y }],
  }));

  const pan = Gesture.Pan()
    .onStart(() => {
      startPozisyon.value = { ...pozisyon.value };
    })
    .onUpdate((e) => {
      pozisyon.value = {
        x: e.translationX + startPozisyon.value.x,
        y: e.translationY + startPozisyon.value.y,
      };
    })
    .onEnd(() => {
      pozisyon.value = withSpring({ x: 0, y: 0 }, { damping: 50 });
    });

  return (
    <View className="flex-1 items-center justify-center">
      <GestureDetector gesture={pan}>
        <Animated.View className="h-32 w-32 rounded-full bg-blue-500" style={animatedStyle} />
      </GestureDetector>
    </View>
  );
};

export default Index;
