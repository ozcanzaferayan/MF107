import '../global.css';
import '../src/i18n';

import { CherryBombOne_400Regular } from '@expo-google-fonts/cherry-bomb-one';
import { Jua_400Regular, useFonts } from '@expo-google-fonts/jua';
import { Stack, useRouter, useSegments } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '../src/config/firebase';
import { registerForPushNotificationsAsync } from '../src/utils/notifications';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      registerForPushNotificationsAsync().then((token) => {
        if (token) {
          // Save token to firestore
          setDoc(
            doc(db, 'users', user.uid),
            {
              pushToken: token,
              email: user.email,
            },
            { merge: true }
          );
        }
      });
    }
  }, [user]);

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      // Redirect to the sign-in page.
      router.replace('/(auth)/login');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/(tabs)');
    }
  }, [user, loading, segments]);

  return (
    <SettingsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </SettingsProvider>
  );
}

export default function Layout() {
  const [loaded] = useFonts({
    Jua_400Regular,
    CherryBombOne_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
