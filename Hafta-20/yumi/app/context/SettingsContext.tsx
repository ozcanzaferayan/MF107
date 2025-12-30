import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type SettingsContextType = {
  musicEnabled: boolean;
  sfxEnabled: boolean;
  notificationsEnabled: boolean;
  darkMode: boolean;
  setMusicEnabled: (enabled: boolean) => void;
  setSfxEnabled: (enabled: boolean) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  setDarkMode: (enabled: boolean) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [musicEnabled, setMusicEnabledState] = useState(true);
  const [sfxEnabled, setSfxEnabledState] = useState(true);
  const [notificationsEnabled, setNotificationsEnabledState] = useState(false);
  const [darkMode, setDarkModeState] = useState(false);

  useEffect(() => {
    // Load settings from storage on mount
    const loadSettings = async () => {
      try {
        const music = await AsyncStorage.getItem('musicEnabled');
        const sfx = await AsyncStorage.getItem('sfxEnabled');
        const notifications = await AsyncStorage.getItem('notificationsEnabled');
        const dark = await AsyncStorage.getItem('darkMode');

        if (music !== null) setMusicEnabledState(JSON.parse(music));
        if (sfx !== null) setSfxEnabledState(JSON.parse(sfx));
        if (notifications !== null) setNotificationsEnabledState(JSON.parse(notifications));
        if (dark !== null) setDarkModeState(JSON.parse(dark));
      } catch (e) {
        console.error('Failed to load settings', e);
      }
    };
    loadSettings();
  }, []);

  const setMusicEnabled = async (enabled: boolean) => {
    setMusicEnabledState(enabled);
    await AsyncStorage.setItem('musicEnabled', JSON.stringify(enabled));
  };

  const setSfxEnabled = async (enabled: boolean) => {
    setSfxEnabledState(enabled);
    await AsyncStorage.setItem('sfxEnabled', JSON.stringify(enabled));
  };

  const setNotificationsEnabled = async (enabled: boolean) => {
    setNotificationsEnabledState(enabled);
    await AsyncStorage.setItem('notificationsEnabled', JSON.stringify(enabled));
  };

  const setDarkMode = async (enabled: boolean) => {
    setDarkModeState(enabled);
    await AsyncStorage.setItem('darkMode', JSON.stringify(enabled));
  };

  return (
    <SettingsContext.Provider
      value={{
        musicEnabled,
        sfxEnabled,
        notificationsEnabled,
        setMusicEnabled,
        setSfxEnabled,
        setNotificationsEnabled,
        darkMode,
        setDarkMode,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
