// rnfe

import { TickMarks } from '@/components/TickMarks';
import { formatSeconds } from '@/utils/formatTime';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useAudioPlayer } from 'expo-audio';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const audioSource = require('../assets/lofi-vivid-illustrate.mp3');

const Index = () => {
  const DURATION = 25 * 60; // 25 dk
  const HALF_TIME = DURATION; // 15dk'dan itibaren başlasın
  const player = useAudioPlayer(audioSource);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  player.loop = true; // Sürekli çalsın diye

  // uffs
  useEffect(() => {
    if (isPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((playing) => !playing);
  };

  const handleReset = () => {
    setKey((key) => key + 1);
    setIsPlaying(false);
    player.pause();
    player.seekTo(0); // Şarkı başa sarsın diye
  };

  return (
    <ImageBackground
      source={require('../assets/bg-illustration-1.png')}
      className="flex-1"
      resizeMode="cover">
      <View className="items-center gap-4 px-6 pt-32">
        <Text
          className="text-3xl text-blue-900"
          style={{
            fontFamily: 'Noteworthy-Bold',
          }}>
          You can do it girl
        </Text>

        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={DURATION}
          initialRemainingTime={HALF_TIME}
          colors={['#ff8b7e', '#ff6b6b']}
          trailColor="#ff8b7e33"
          colorsTime={[DURATION, 0]}
          rotation="counterclockwise"
          strokeWidth={12}
          size={300}>
          {({ remainingTime }) => {
            return (
              <View className="items-center">
                <TickMarks />
                <Text className="text-6xl font-bold">{formatSeconds(remainingTime)}</Text>
                <Text className="mt-2 text-base text-gray-700">Lofi</Text>
                <Text className="mt-0 text-xs text-gray-500">Vivid</Text>
                {/* Müzik Kontrolleri */}
                <View className="mt-4 flex-row items-center gap-8">
                  <Pressable>
                    <FontAwesome6 name="backward-step" size={24} color="black" />
                  </Pressable>
                  <Pressable
                    onPress={handlePlayPause}
                    className="h-16 w-16 items-center rounded-full bg-red-200 p-4">
                    <FontAwesome6 name={isPlaying ? 'pause' : 'play'} size={24} color="black" />
                  </Pressable>
                  <Pressable>
                    <FontAwesome6 name="forward-step" size={24} color="black" />
                  </Pressable>
                </View>
              </View>
            );
          }}
        </CountdownCircleTimer>

        <Pressable onPress={handleReset}>
          <FontAwesome6 name="arrow-rotate-right" size={24} color="black" />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Index;
