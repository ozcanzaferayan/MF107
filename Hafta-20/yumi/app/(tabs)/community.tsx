import { Stack, useRouter } from 'expo-router';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../src/config/firebase';
import { useSettings } from '../context/SettingsContext';

type MoodEntry = {
  id: string;
  userEmail: string;
  mood: string;
  timestamp: any;
};

export default function Community() {
  const { darkMode } = useSettings();
  const [moods, setMoods] = useState<MoodEntry[]>([]);
  const router = useRouter();

  useEffect(() => {
    const q = query(collection(db, 'moods'), orderBy('timestamp', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const moodList: MoodEntry[] = [];
      snapshot.forEach((doc) => {
        moodList.push({ id: doc.id, ...doc.data() } as MoodEntry);
      });
      setMoods(moodList);
    });

    return () => unsubscribe();
  }, []);

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'sad':
        return '😢';
      case 'bored':
        return '😐';
      case 'sleepy':
        return '😴';
      default:
        return '❓';
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/bg_clouds.png')}
      className="flex-1"
      resizeMode="cover">
      <SafeAreaView className="flex-1 px-4">
        <Stack.Screen options={{ headerShown: false }} />

        <Text
          className={`mt-4 text-center text-3xl ${darkMode ? 'text-white' : 'text-slate-600'} mb-6`}
          style={{ fontFamily: 'CherryBombOne_400Regular' }}>
          Community Moods
        </Text>

        <FlatList
          data={moods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                router.push({
                  pathname: '/user-profile/[email]',
                  params: { email: item.userEmail },
                })
              }>
              <View
                className={`mb-4 rounded-2xl p-4 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <View className="flex-row items-center justify-between">
                  <Text className={`font-bold ${darkMode ? 'text-pink-300' : 'text-pink-500'}`}>
                    {item.userEmail.split('@')[0]}
                  </Text>
                  <Text className="text-2xl">{getMoodEmoji(item.mood)}</Text>
                </View>
                <Text className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  is feeling {item.mood}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
