import { Button } from '@/components/Button';
import { login } from '@/slices/authSlice';
import { RootState, useAppDispatch } from '@/store/store';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

const Index = () => {
  const dispatch = useAppDispatch();
  const name = useSelector((state: RootState) => state.auth.user?.name);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Yalandan istek atıyoruz
    // fetch(email, password)
    // Yalandan sonuç döndü varsayalım aşağıdaki gibi
    const res = {
      token: 'asjdgkhasl1247t',
      user: {
        id: 42,
        name: 'ZAfer',
        email: 'ozcanzaferayan@gmail.com',
      },
    };
    // Redux'a kaydedicez
    dispatch(login(res));
  };

  return (
    <View>
      <Text>{name} Hoşgeldin</Text>
      <TextInput value={email} onChangeText={setEmail} className="border-1 p-4" />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border-1 p-4"
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

export default Index;
