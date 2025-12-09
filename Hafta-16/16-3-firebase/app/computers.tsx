import { Button } from '@/components/Button';
import { useAsyncStorage } from '@/hooks/useAsyncStorage';
import { useSignout } from '@/hooks/useSignout';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const Computers = () => {
  const { removeValue: removeUser } = useAsyncStorage('user');
  const { mutateAsync: signout } = useSignout();

  const handleSignout = async () => {
    await signout();
    await removeUser();
    router.replace('/');
  };
  return (
    <View>
      <Button title="Çıkış yap" onPress={handleSignout} />
    </View>
  );
};

export default Computers;
