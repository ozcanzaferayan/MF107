import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  // Hedef bölgenin merkezi
  const targetX = 0;
  const targetY = -155;
  const SNAP_RADIUS = 80; // Yakınlık sınırı

  const pan = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((e) => {
      translateX.value = startX.value + e.translationX;
      translateY.value = startY.value + e.translationY;
    })
    .onEnd(() => {
      // Mesafe hesapla
      const dx = translateX.value - targetX;
      const dy = translateY.value - targetY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      console.log(distance);

      // Yakınsa yapıştır
      if (distance < SNAP_RADIUS) {
        translateX.value = withSpring(targetX);
        translateY.value = withSpring(targetY);
      } else {
        // Eski yerine dön
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const boxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Hedef bölge */}
      <View style={styles.target} />

      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.box, boxStyle]} />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  target: {
    width: 120,
    height: 120,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    position: 'absolute',
    top: '25%',
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: 'royalblue',
    borderRadius: 16,
  },
});
