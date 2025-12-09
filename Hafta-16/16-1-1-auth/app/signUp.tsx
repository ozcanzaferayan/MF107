import { Button } from '@/components/Button';
import { useSignup } from '@/hooks/useSignup';
import { router } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('ozcanzaferayan@gmail.com');
  const [password, setPassword] = useState('passw0rd!');

  const { mutateAsync: signup, isError, error } = useSignup();
  
  const handleSignup = () => {
    signup({ email, password })
      .then((data) => {
        if (data) {
          router.push('/students');
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
      <Button title="Kayıt Ol" onPress={handleSignup} />
      {isError && (
        <Text className="mt-6 text-red-500">
          {error.code === 'auth/email-already-in-use'
            ? 'Email adresi zaten var. Lütfen giriş yapınız'
            : error.message}
        </Text>
      )}
    </View>
  );
};

export default SignUp;
