import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type SpeechBubbleProps = {
  text: string;
};

export const SpeechBubble = ({ text }: SpeechBubbleProps) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    // Reset values to trigger animation again if text changes
    opacity.value = 0;
    scale.value = 0.8;

    // Animate in
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withSpring(1, { damping: 12 });
  }, [text]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.tail} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '100%', // Position directly above the container
    marginBottom: 20, // Add some spacing
    backgroundColor: '#FFF0F5', // Light pastel pink
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 20,
    minWidth: 120,
    maxWidth: 220,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: '#6B5B75', // Readble soft dark color
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  tail: {
    position: 'absolute',
    bottom: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFF0F5',
  },
});
