import { SourGummy_100Thin } from '@expo-google-fonts/sour-gummy';
import { SourGummy_100Thin_Italic } from '@expo-google-fonts/sour-gummy/100Thin_Italic';
import { SourGummy_200ExtraLight } from '@expo-google-fonts/sour-gummy/200ExtraLight';
import { SourGummy_200ExtraLight_Italic } from '@expo-google-fonts/sour-gummy/200ExtraLight_Italic';
import { SourGummy_300Light } from '@expo-google-fonts/sour-gummy/300Light';
import { SourGummy_300Light_Italic } from '@expo-google-fonts/sour-gummy/300Light_Italic';
import { SourGummy_400Regular } from '@expo-google-fonts/sour-gummy/400Regular';
import { SourGummy_400Regular_Italic } from '@expo-google-fonts/sour-gummy/400Regular_Italic';
import { SourGummy_500Medium } from '@expo-google-fonts/sour-gummy/500Medium';
import { SourGummy_500Medium_Italic } from '@expo-google-fonts/sour-gummy/500Medium_Italic';
import { SourGummy_600SemiBold } from '@expo-google-fonts/sour-gummy/600SemiBold';
import { SourGummy_600SemiBold_Italic } from '@expo-google-fonts/sour-gummy/600SemiBold_Italic';
import { SourGummy_700Bold } from '@expo-google-fonts/sour-gummy/700Bold';
import { SourGummy_700Bold_Italic } from '@expo-google-fonts/sour-gummy/700Bold_Italic';
import { SourGummy_800ExtraBold } from '@expo-google-fonts/sour-gummy/800ExtraBold';
import { SourGummy_800ExtraBold_Italic } from '@expo-google-fonts/sour-gummy/800ExtraBold_Italic';
import { SourGummy_900Black } from '@expo-google-fonts/sour-gummy/900Black';
import { SourGummy_900Black_Italic } from '@expo-google-fonts/sour-gummy/900Black_Italic';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text } from 'react-native';
import '../global.css';

export default function Layout() {
  // isLoaded: Çalışma zamanı yüklendiği için splash gösterip bekletebiliriz
  const [isLoaded] = useFonts({
    Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    SourGummy_100Thin,
    SourGummy_200ExtraLight,
    SourGummy_300Light,
    SourGummy_400Regular,
    SourGummy_500Medium,
    SourGummy_600SemiBold,
    SourGummy_700Bold,
    SourGummy_800ExtraBold,
    SourGummy_900Black,
    SourGummy_100Thin_Italic,
    SourGummy_200ExtraLight_Italic,
    SourGummy_300Light_Italic,
    SourGummy_400Regular_Italic,
    SourGummy_500Medium_Italic,
    SourGummy_600SemiBold_Italic,
    SourGummy_700Bold_Italic,
    SourGummy_800ExtraBold_Italic,
    SourGummy_900Black_Italic,
  });

  // Font henüz yüklenmediyse splash göster veya metin göster
  if (!isLoaded) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
