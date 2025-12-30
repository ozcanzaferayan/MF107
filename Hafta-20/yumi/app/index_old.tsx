import { useAudioPlayer } from 'expo-audio';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

// Star Component
const Star = ({ style, delay, duration }: { style: any; delay: number; duration: number }) => {
  const opacity = useSharedValue(0.3);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: duration, easing: Easing.inOut(Easing.ease) }), -1, true)
    );
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(1.2, { duration: duration, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      )
    );
  }, [delay, duration, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[style, animatedStyle, { alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={{ fontSize: style.width, color: '#FFF' }}>✨</Text>
    </Animated.View>
  );
};

export default function Home() {
  const [isBlinking, setIsBlinking] = useState(false);
  const scale = useSharedValue(1);

  // Generate random stars
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * width,
        top: Math.random() * height,
        size: Math.random() * 15 + 10,
        delay: Math.random() * 2000,
        duration: Math.random() * 1000 + 1000,
      })),
    []
  );

  const player = useAudioPlayer(require('../assets/music/lofi-background-music.mp3'));

  useEffect(() => {
    player.loop = true;
    player.volume = 0.5;
    player.play();
  }, [player]);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.05, {
        duration: 3000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [scale]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleBlink = () => {
      const delay = Math.random() * 4000 + 2000;
      timeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 150);
      }, delay);
    };

    scheduleBlink();
    return () => clearTimeout(timeoutId);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scale.value }],
    };
  });

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Background Image */}
      <Image
        source={require('../assets/backgrounds/bg_home.png')}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        resizeMode="cover"
      />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <Star
          key={star.id}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          delay={star.delay}
          duration={star.duration}
        />
      ))}

      {/* Main Content */}
      <View className="relative flex-1 items-center justify-center">
        {/* White background glow/cloud shape behind character */}
        <View className="absolute h-[340px] w-[340px] rounded-full bg-white/40 blur-2xl" />

        {/* Character Image */}
        <Animated.Image
          source={
            isBlinking
              ? require('../assets/characters/yumi/yumi_blink.png')
              : require('../assets/characters/yumi/yumi_base.png')
          }
          style={[{ width: width * 0.8, height: width * 0.8 }, animatedStyle]}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Action Bar */}
      <View className="w-full flex-row items-center justify-evenly px-4 pb-12">
        {/* Sleepy */}
        <ActionButton imageSource={require('../assets/icons/mood/mood_sleepy.png')} />

        {/* Bored */}
        <ActionButton imageSource={require('../assets/icons/mood/mood_bored.png')} />

        {/* Sad */}
        <ActionButton imageSource={require('../assets/icons/mood/mood_sad.png')} />

        {/* Happy */}
        <ActionButton imageSource={require('../assets/icons/mood/mood_happy.png')} />
      </View>
    </View>
  );
}

// Helper component for buttons
const ActionButton = ({ imageSource }: { imageSource: ImageSourcePropType }) => (
  <TouchableOpacity
    className="items-center justify-center rounded-full border-4 border-white/50 shadow-lg"
    activeOpacity={0.7}>
    <Image source={imageSource} style={{ width: 80, height: 80 }} resizeMode="contain" />
  </TouchableOpacity>
);
