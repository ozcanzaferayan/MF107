import { Button } from '@/components/Button';
import { useAsyncStorage } from '@/hooks/useAsyncStorage';
import { useSignin } from '@/hooks/useSignin';
import { useSignup } from '@/hooks/useSignup';
import { router } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Index = () => {
  // usss
  const [email, setEmail] = useState('ozcanzaferayan@gmail.com');
  const [password, setPassword] = useState('passw0rd!');

  const { mutateAsync: signup, isPending: isSignupPending } = useSignup();
  const { mutateAsync: signIn, isPending: isSigninPending } = useSignin();

  const {
    value: user,
    saveValue: saveUser,
    isLoading: isUserLoading,
  } = useAsyncStorage<User>('user');

  const handleSignup = async () => {
    signup({ email, password })
      .then(async (user) => {
        if (user) {
          await saveUser(user);
          router.replace('/computers');
        }
      })
      .catch((error: FirebaseError) => {
        if (error) {
          alert(error.message);
        }
      });
  };

  const handleSignin = async () => {
    signIn({ email, password })
      .then(async (user) => {
        if (user) {
          await saveUser(user);
          router.replace('/computers');
        }
      })
      .catch((error: FirebaseError) => {
        if (error) {
          alert(error.message);
        }
      });
  };

  if (isUserLoading) {
    return <Text className="text-3xl">Yükleniyor...</Text>;
  }

  if (user) {
    router.replace('/computers');
    return;
  }

  return (
    <View className="gap-4">
      <TextInput
        placeholder="Eposta adresi giriniz"
        value={email}
        onChangeText={setEmail}
        className="rounded border p-4"
      />
      <TextInput
        placeholder="Parola giriniz"
        value={password}
        onChangeText={setPassword}
        className="rounded border p-4"
        secureTextEntry={true}
      />
      <Button
        title={isSignupPending ? 'Yükleniyor...' : 'Giriş Yap'}
        onPress={handleSignin}
        disabled={isSigninPending}
      />
      <Button
        title={isSignupPending ? 'Yükleniyor...' : 'Kayıt Ol'}
        onPress={handleSignup}
        disabled={isSignupPending}
      />
    </View>
  );
};

export default Index;
