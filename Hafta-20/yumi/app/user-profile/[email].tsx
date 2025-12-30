import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
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

export default function UserProfile() {
  const { email } = useLocalSearchParams();
  const { darkMode } = useSettings();
  const router = useRouter();
  const [moods, setMoods] = useState<MoodEntry[]>([]);
  const userEmail = Array.isArray(email) ? email[0] : email;

  useEffect(() => {
    if (!userEmail) return;

    const q = query(
      collection(db, 'moods'),
      where('userEmail', '==', userEmail),
      orderBy('timestamp', 'desc'),
      limit(20)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const moodList: MoodEntry[] = [];
      snapshot.forEach((doc) => {
        moodList.push({ id: doc.id, ...doc.data() } as MoodEntry);
      });
      setMoods(moodList);
    });

    return () => unsubscribe();
  }, [userEmail]);

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

  const formatDate = (timestamp: any) => {
    if (!timestamp?.toDate) return '';
    const date = timestamp.toDate();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/bg_clouds.png')}
      className="flex-1"
      resizeMode="cover">
      <SafeAreaView className="flex-1 px-4">
        <Stack.Screen options={{ headerShown: false }} />

        <View className="mb-6 mt-4 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4 p-1">
            <Ionicons name="arrow-back" size={28} color={darkMode ? 'white' : '#475569'} />
          </TouchableOpacity>
          <Text
            className={`text-2xl ${darkMode ? 'text-white' : 'text-slate-600'} flex-1`}
            style={{ fontFamily: 'CherryBombOne_400Regular' }}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {userEmail?.split('@')[0]}&apos;s Profile
          </Text>
        </View>

        <View
          className={`mb-6 rounded-2xl p-5 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white/90'}`}>
          <Text className={`mb-2 text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-700'}`}>
            User Details
          </Text>
          <View className="flex-row items-center">
            <Ionicons name="mail-outline" size={20} color={darkMode ? '#9CA3AF' : '#64748B'} />
            <Text className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              {userEmail}
            </Text>
          </View>
        </View>

        {/* Daily Mood Analysis */}
        {moods.length > 0 && (
          <View
            className={`mb-6 rounded-2xl p-5 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white/90'}`}>
            <Text
              className={`mb-4 text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-700'}`}>
              Today&apos;s Mood Analysis
            </Text>
            <View className="flex-row justify-between">
              {(() => {
                const todayMoods = moods.filter((m) => {
                  if (!m.timestamp?.toDate) return false;
                  const date = m.timestamp.toDate();
                  const today = new Date();
                  return (
                    date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear()
                  );
                });

                if (todayMoods.length === 0) {
                  return (
                    <Text className={`${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                      No moods recorded today.
                    </Text>
                  );
                }

                const total = todayMoods.length;
                const counts: Record<string, number> = {};
                todayMoods.forEach((m) => {
                  counts[m.mood] = (counts[m.mood] || 0) + 1;
                });

                return Object.entries(counts).map(([mood, count]) => (
                  <View key={mood} className="items-center">
                    <Text className="text-2xl">{getMoodEmoji(mood)}</Text>
                    <Text className={`font-bold ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                      {Math.round((count / total) * 100)}%
                    </Text>
                    <Text className={`text-xs ${darkMode ? 'text-gray-500' : 'text-slate-400'}`}>
                      {mood}
                    </Text>
                  </View>
                ));
              })()}
            </View>
          </View>
        )}

        <Text
          className={`text-xl ${darkMode ? 'text-white' : 'text-slate-600'} mb-4`}
          style={{ fontFamily: 'CherryBombOne_400Regular' }}>
          Recent Moods
        </Text>

        <FlatList
          data={moods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              className={`mb-4 rounded-2xl p-4 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
              <View className="flex-row items-center justify-between">
                <Text className={`font-medium ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  {formatDate(item.timestamp)}
                </Text>
                <Text className="text-3xl">{getMoodEmoji(item.mood)}</Text>
              </View>
              <Text
                className={`mt-2 font-semibold ${darkMode ? 'text-pink-300' : 'text-pink-500'}`}>
                {item.mood.charAt(0).toUpperCase() + item.mood.slice(1)}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text className={`mt-10 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No mood history found.
            </Text>
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
