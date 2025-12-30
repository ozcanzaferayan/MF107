// rnfe

import { useAudioPlayer } from 'expo-audio';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const Index = () => {
  const potaPozisyon = { x: 100, y: 100 };
  const pozisyon = useSharedValue({ x: 150, y: 300 });
  const startPozisyon = useSharedValue({ x: 150, y: 300 });
  const player = useAudioPlayer(require('../assets/audio/success.mp3'));

  // Haptic/titreşim tetiklemek için fonksiyonumuz
  const fireHaptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };
  const fireHapticLight = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  const fireHapticSuccess = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };
  const fireSuccessAudio = () => {
    player.play();
    setTimeout(() => player.seekTo(0), 0);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: pozisyon.value.x },
      {
        translateY: pozisyon.value.y,
      },
    ],
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
      // Distance X
      const dx = pozisyon.value.x - potaPozisyon.x;
      const dy = pozisyon.value.y - potaPozisyon.y + 112;
      // Hipotenüs bulma
      const distance = Math.sqrt(dx * dx + dy * dy);
      console.log(distance);

      const YAKINLIK = 112;

      // Yakınsa yapıştır
      if (distance < YAKINLIK) {
        pozisyon.value = withSpring(
          { x: potaPozisyon.x, y: potaPozisyon.y - 112 },
          { damping: 50 }
        );
        scheduleOnRN(fireSuccessAudio);
        scheduleOnRN(fireHapticSuccess);
      } else {
        // Değilse geri dön
        pozisyon.value = withSpring({ x: 150, y: 300 }, { damping: 50 });
      }
    });
  return (
    <View>
      {/* Pota */}
      <View
        className="rounded-xl bg-green-500"
        style={[
          { width: 128, height: 128 },
          {
            transform: [{ translateX: potaPozisyon.x }, { translateY: potaPozisyon.y }],
          },
        ]}></View>
      {/* Top */}
      <GestureDetector gesture={pan}>
        <Animated.Image
          source={require('../assets/icons/heart.png')}
          className="h-32 w-32"
          style={[{ width: 128, height: 128 }, animatedStyle]}></Animated.Image>
      </GestureDetector>
    </View>
  );
};

export default Index;
