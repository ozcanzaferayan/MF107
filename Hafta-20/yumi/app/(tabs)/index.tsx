import { useAudioPlayer } from 'expo-audio';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SpeechBubble } from '../../src/components/SpeechBubble';
import { db } from '../../src/config/firebase';
import { sendPushNotification } from '../../src/utils/notifications';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';

const { width, height } = Dimensions.get('window');

const voiceAssets = {
  en: {
    sleepy: require('../../assets/audio/voice/en/voice_sleepy_en.mp3'),
    bored: require('../../assets/audio/voice/en/voice_bored_en.mp3'),
    sad: require('../../assets/audio/voice/en/voice_sad_en.mp3'),
    happy: require('../../assets/audio/voice/en/voice_happy_en.mp3'),
  },
  tr: {
    sleepy: require('../../assets/audio/voice/tr/voice_sleepy_tr.mp3'),
    bored: require('../../assets/audio/voice/tr/voice_bored_tr.mp3'),
    sad: require('../../assets/audio/voice/tr/voice_sad_tr.mp3'),
    happy: require('../../assets/audio/voice/tr/voice_happy_tr.mp3'),
  },
};

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
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const scale = useSharedValue(1);
  const { musicEnabled, sfxEnabled, darkMode } = useSettings();
  const { user } = useAuth();
  const { t, i18n } = useTranslation();

  const currentLang = (i18n.language === 'tr' ? 'tr' : 'en') as keyof typeof voiceAssets;

  const sleepyPlayer = useAudioPlayer(voiceAssets[currentLang].sleepy);
  const boredPlayer = useAudioPlayer(voiceAssets[currentLang].bored);
  const sadPlayer = useAudioPlayer(voiceAssets[currentLang].sad);
  const happyPlayer = useAudioPlayer(voiceAssets[currentLang].happy);

  const handleMoodPress = (mood: string, message: string) => {
    setSelectedMood(mood);
    setCurrentMessage(message);

    if (sfxEnabled) {
      if (mood === 'sleepy') sleepyPlayer.play();
      if (mood === 'bored') boredPlayer.play();
      if (mood === 'sad') sadPlayer.play();
      if (mood === 'happy') happyPlayer.play();
    }

    if (user) {
      addDoc(collection(db, 'moods'), {
        userEmail: user.email,
        mood: mood,
        timestamp: serverTimestamp(),
      })
        .then(async () => {
          // Broadcast notification to other users
          const q = query(collection(db, 'users'), where('email', '!=', user.email));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.pushToken) {
              sendPushNotification(
                data.pushToken,
                'New Mood Shared!',
                `${user.email?.split('@')[0]} is feeling ${mood}`
              );
            }
          });
        })
        .catch((error) => console.error('Error adding mood: ', error));
    }
  };

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

  const player = useAudioPlayer(require('../../assets/music/lofi-background-music.mp3'));

  useEffect(() => {
    player.loop = true;
    player.volume = 0.5;
  }, [player]);

  useEffect(() => {
    if (musicEnabled) {
      player.play();
    } else {
      player.pause();
    }
  }, [musicEnabled, player]);

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
        source={
          darkMode
            ? require('../../assets/backgrounds/bg_home_dark.png')
            : require('../../assets/backgrounds/bg_home.png')
        }
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        resizeMode="cover"
      />

      {/* Title */}
      <View className="absolute top-16 w-full items-center">
        <Text
          style={{
            fontFamily: 'CherryBombOne_400Regular',
            fontSize: 48,
            color: 'white',
            textShadowColor: 'rgba(255, 105, 180, 0.5)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 4,
          }}>
          Yumi
        </Text>
      </View>

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
      <View className="relative mt-36 flex-1 items-center justify-center">
        {/* White background glow/cloud shape behind character */}
        <View className="absolute h-[340px] w-[340px] rounded-full bg-white/40 blur-2xl" />

        {/* Character Container */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {/* Speech Bubble */}
          {currentMessage && <SpeechBubble text={currentMessage} />}

          {/* Character Image */}
          <Animated.Image
            source={
              selectedMood === 'sleepy'
                ? require('../../assets/characters/yumi/yumi_sleepy.png')
                : selectedMood === 'bored'
                  ? require('../../assets/characters/yumi/yumi_bored.png')
                  : selectedMood === 'sad'
                    ? require('../../assets/characters/yumi/yumi_sad.png')
                    : selectedMood === 'happy'
                      ? require('../../assets/characters/yumi/yumi_happy.png')
                      : isBlinking
                        ? require('../../assets/characters/yumi/yumi_blink.png')
                        : require('../../assets/characters/yumi/yumi_base.png')
            }
            style={[{ width: width * 0.8, height: width * 0.8 }, animatedStyle]}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Bottom Action Bar */}
      <View className="w-full flex-row items-center justify-evenly px-4 pb-56">
        {/* Sleepy */}
        <ActionButton
          imageSource={require('../../assets/icons/mood/mood_sleepy.png')}
          onPress={() => handleMoodPress('sleepy', t('mood.sleepy.message'))}
          active={selectedMood === 'sleepy'}
        />

        {/* Bored */}
        <ActionButton
          imageSource={require('../../assets/icons/mood/mood_bored.png')}
          onPress={() => handleMoodPress('bored', t('mood.bored.message'))}
          active={selectedMood === 'bored'}
        />

        {/* Sad */}
        <ActionButton
          imageSource={require('../../assets/icons/mood/mood_sad.png')}
          onPress={() => handleMoodPress('sad', t('mood.sad.message'))}
          active={selectedMood === 'sad'}
        />

        {/* Happy */}
        <ActionButton
          imageSource={require('../../assets/icons/mood/mood_happy.png')}
          onPress={() => handleMoodPress('happy', t('mood.happy.message'))}
          active={selectedMood === 'happy'}
        />
      </View>
    </View>
  );
}

// Helper component for buttons
const ActionButton = ({
  imageSource,
  onPress,
  active,
}: {
  imageSource: ImageSourcePropType;
  onPress: () => void;
  active?: boolean;
}) => (
  <TouchableOpacity
    className={`items-center justify-center rounded-full border-4 shadow-lg ${
      active ? 'border-pink-300 bg-white/20' : 'border-white/50'
    }`}
    activeOpacity={0.7}
    onPress={onPress}>
    <Image source={imageSource} style={{ width: 80, height: 80 }} resizeMode="contain" />
  </TouchableOpacity>
);
