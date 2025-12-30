import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSettings } from '../context/SettingsContext';

export default function Settings() {
  const { t, i18n } = useTranslation();
  const isTurkish = i18n.language === 'tr';

  const toggleLanguage = () => {
    i18n.changeLanguage(isTurkish ? 'en' : 'tr');
  };
  const {
    musicEnabled,
    setMusicEnabled,
    sfxEnabled,
    setSfxEnabled,
    notificationsEnabled,
    setNotificationsEnabled,
    darkMode,
    setDarkMode,
  } = useSettings();

  return (
    <SafeAreaView className={`flex-1 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView>
        <Text
          className="mt-4 text-center text-3xl text-slate-600"
          style={{ fontFamily: 'CherryBombOne_400Regular' }}>
          {t('settings.title')}
        </Text>

        <View className="flex-1 px-8 pt-10">
          {/* Music Setting */}
          <SettingItem
            icon="musical-notes"
            iconColor="#F472B6"
            bgColor="#E0F2FE"
            label={t('settings.music.label')}
            value={musicEnabled}
            onValueChange={setMusicEnabled}
            trackColor="#A7F3D0"
            thumbColor="#FBCFE8"
          />

          {/* Sound Effects Setting */}
          <SettingItem
            icon="volume-high"
            iconColor="#A78BFA"
            bgColor="#E0F2FE"
            label={t('settings.sfx.label')}
            value={sfxEnabled}
            onValueChange={setSfxEnabled}
            trackColor="#FBCFE8"
            thumbColor="#FDE68A"
          />

          {/* Dark Mode Setting */}
          <SettingItem
            icon="moon"
            iconColor="#6366F1"
            bgColor="#E0F2FE"
            label={t('settings.darkmode.label')}
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor="#818CF8"
            thumbColor="#C7D2FE"
          />

          {/* Notifications Setting */}
          <SettingItem
            icon="notifications"
            iconColor="#FBBF24"
            bgColor="#E0F2FE"
            label={t('settings.notifications.label') || 'Notifications'} // Fallback for now if not in JSON
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor="#FED7AA"
            thumbColor="#9CA3AF"
          />

          {/* Language Setting */}
          <SettingItem
            icon="language"
            iconColor="#60A5FA" // Blue for language
            bgColor="#E0F2FE"
            label={t('settings.language.label')}
            value={isTurkish}
            onValueChange={toggleLanguage}
            trackColor="#93C5FD"
            thumbColor={isTurkish ? '#EF4444' : '#3B82F6'} // Red for TR, Blue for EN (simulation)
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Component for Setting Row
const SettingItem = ({
  icon,
  iconColor,
  bgColor,
  label,
  value,
  onValueChange,
  trackColor,
  thumbColor,
}: {
  icon: any;
  iconColor: string;
  bgColor: string;
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
  trackColor: string;
  thumbColor: string;
}) => (
  <View className="mb-8 flex-row items-center justify-between">
    <View className="flex-row items-center">
      <View
        style={{ backgroundColor: bgColor }}
        className="mr-4 h-16 w-16 items-center justify-center rounded-full">
        <Ionicons name={icon} size={32} color={iconColor} />
      </View>
      <Text className={`text-xl font-bold ${value ? 'text-slate-500' : 'text-slate-500'}`}>
        {label}
      </Text>
    </View>

    <Switch
      trackColor={{ false: '#E5E7EB', true: trackColor }}
      thumbColor={value ? thumbColor : '#f4f3f4'}
      ios_backgroundColor="#E5E7EB"
      onValueChange={onValueChange}
      value={value}
      style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
    />
  </View>
);
