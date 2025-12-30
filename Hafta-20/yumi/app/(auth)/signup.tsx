import { Stack, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { auth } from '../../src/config/firebase';

export default function Signup() {
  const [email, setEmail] = useState('ozcanzaferayan@gmail.com');
  const [password, setPassword] = useState('passw0rd!');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Auth listener handles redirection
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-8">
        <View className="mb-10 items-center">
          <Text
            className="text-center text-5xl text-blue-400"
            style={{ fontFamily: 'CherryBombOne_400Regular' }}>
            Join Yumi
          </Text>
          <Text className="mt-2 font-medium text-gray-400">Start your journey today!</Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="mb-2 ml-1 font-bold text-gray-500">Email</Text>
            <TextInput
              className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 text-gray-700"
              placeholder="hello@example.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View className="mt-4">
            <Text className="mb-2 ml-1 font-bold text-gray-500">Password</Text>
            <TextInput
              className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 text-gray-700"
              placeholder="••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            onPress={handleSignup}
            disabled={loading}
            className="mt-8 w-full rounded-2xl bg-blue-400 p-4 shadow-md shadow-blue-200">
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-center text-lg font-bold text-white">Sign Up</Text>
            )}
          </TouchableOpacity>

          <View className="mt-6 flex-row justify-center">
            <Text className="text-gray-400">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="font-bold text-blue-400">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
