// rnfe
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const Index = () => {
  // Chat'e sorduğumuz soru
  const prompt = "Istanbul'da yaşıyorum. Hava 10 Derece. Dışarı çıkacağım sence ne giyeyim?";
  // ChatGPT'den dönen sonuç
  const [sonuc, setSonuc] = useState('');

  // uffs
  useEffect(() => {
    // fetch isteği atarak Chat'e sorucaz
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
      }),
    })
      .then((res) => res.json())
      .then((data) => setSonuc(data.choices[0].message.content));
  }, []);

  return (
    <View>
      <Text>Propmt: {prompt}</Text>
      <Text>Sonuç: {sonuc}</Text>
    </View>
  );
};

export default Index;
