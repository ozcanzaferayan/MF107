// rnfe

import * as Haptics from 'expo-haptics';
import React from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const Index = () => {
  const pozisyon = useSharedValue({ x: 0, y: 0 });
  const startPozisyon = useSharedValue({ x: 0, y: 0 });

  // Haptic/titreşim tetiklemek için fonksiyonumuz
  const fireHaptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };
  const fireHapticLight = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: pozisyon.value.x }, { translateY: pozisyon.value.y }],
  }));

  const pan = Gesture.Pan()
    .onStart(() => {
      scheduleOnRN(fireHaptic);
      startPozisyon.value = { ...pozisyon.value };
    })
    .onUpdate((e) => {
      scheduleOnRN(fireHapticLight);
      pozisyon.value = {
        x: e.translationX + startPozisyon.value.x,
        y: e.translationY + startPozisyon.value.y,
      };
    })
    .onEnd(() => {
      scheduleOnRN(fireHaptic);
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
