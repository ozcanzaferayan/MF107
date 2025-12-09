import { Button } from '@/components/Button';
import { useSignIn } from '@/hooks/useSignin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Index = () => {
  const [email, setEmail] = useState('ozcanzaferayan@gmail.com');
  const [password, setPassword] = useState('passw0rd!');

  const { mutateAsync: signin, isError, error, isPending } = useSignIn();

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        router.replace('/cars');
      }
    });
  }, []);

  const handleSignIn = () => {
    signin({ email, password })
      .then(async (user) => {
        if (user) {
          await AsyncStorage.setItem('user', JSON.stringify(user));
          router.replace('/cars');
        }
      })
      .catch((error: FirebaseError) => {
        if (error) {
          alert(error.message);
        }
      });
  };

  return (
    <View>
      <TextInput
        placeholder="E-posta"
        className="border p-4"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Parola"
        secureTextEntry={true}
        className="border p-4"
        value={password}
        onChangeText={setPassword}
      />
      <Button title={isPending ? 'Yükleniyor...' : 'Giriş yap'} onPress={handleSignIn} />
      {isError && <Text className="mt-6 text-red-500">{error.message}</Text>}
    </View>
  );
};

export default Index;
