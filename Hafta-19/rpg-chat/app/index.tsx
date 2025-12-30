// app/TarotScreen.tsx (veya src/screens/TarotScreen.tsx)

import React, { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type TarotCard = {
  name: string;
  meaning: string;
  reversed: string;
};

const TAROT_CARDS: TarotCard[] = [
  {
    name: 'The Fool',
    meaning: 'Yeni başlangıçlar, masumiyet, spontanlık',
    reversed: 'Dikkatsizlik, risk alma',
  },
  {
    name: 'The Magician',
    meaning: 'Manifestasyon, güç, niyet',
    reversed: 'Manipülasyon, güçsüzlük',
  },
  {
    name: 'The High Priestess',
    meaning: 'Sezgi, gizem, içsel bilgelik',
    reversed: 'Gizlilik, bağlantı eksikliği',
  },
  {
    name: 'The Empress',
    meaning: 'Bereket, doğurganlık, doğa',
    reversed: 'Dengesizlik, verimsizlik',
  },
  {
    name: 'The Emperor',
    meaning: 'Otorite, yapı, kontrol',
    reversed: 'Tiranlık, katılık',
  },
  {
    name: 'The Hierophant',
    meaning: 'Gelenek, maneviyat, öğretmen',
    reversed: 'İsyankarlık, konformizm',
  },
  {
    name: 'The Lovers',
    meaning: 'Aşk, uyum, seçimler',
    reversed: 'Dengesizlik, yanlış seçimler',
  },
  {
    name: 'The Chariot',
    meaning: 'Kontrol, zafer, kararlılık',
    reversed: 'Kontrol kaybı, kaos',
  },
  {
    name: 'Strength',
    meaning: 'İç güç, sabır, cesaret',
    reversed: 'Zayıflık, güvensizlik',
  },
  {
    name: 'The Hermit',
    meaning: 'İçe dönüş, rehberlik, yalnızlık',
    reversed: 'İzolasyon, yanlış yön',
  },
  {
    name: 'Wheel of Fortune',
    meaning: 'Değişim, kader, döngüler',
    reversed: 'Kötü şans, direnç',
  },
  {
    name: 'Justice',
    meaning: 'Adalet, denge, sorumluluk',
    reversed: 'Adaletsizlik, dengesizlik',
  },
  {
    name: 'The Hanged Man',
    meaning: 'Fedakarlık, yeni bakış açısı',
    reversed: 'Direnç, gecikme',
  },
  {
    name: 'Death',
    meaning: 'Dönüşüm, son, yeniden doğuş',
    reversed: 'Durgunluk, değişim korkusu',
  },
  {
    name: 'Temperance',
    meaning: 'Denge, ılımlılık, sabır',
    reversed: 'Aşırılık, dengesizlik',
  },
  {
    name: 'The Devil',
    meaning: 'Bağımlılık, kısıtlamalar, materyalizm',
    reversed: 'Özgürleşme, kurtuluş',
  },
  {
    name: 'The Tower',
    meaning: 'Yıkım, şok, uyanış',
    reversed: 'Direnç, kaçınma',
  },
  {
    name: 'The Star',
    meaning: 'Umut, ilham, maneviyat',
    reversed: 'Umut kaybı, hayal kırıklığı',
  },
  {
    name: 'The Moon',
    meaning: 'İllüzyon, korku, bilinçaltı',
    reversed: 'Netlik, korku aşma',
  },
  {
    name: 'The Sun',
    meaning: 'Neşe, başarı, pozitiflik',
    reversed: 'İç karartıcılık, başarısızlık',
  },
  {
    name: 'Judgement',
    meaning: 'Yargılama, yeniden doğuş, aydınlanma',
    reversed: 'Kendini yargılama, pişmanlık',
  },
  {
    name: 'The World',
    meaning: 'Tamamlanma, başarı, bütünlük',
    reversed: 'Eksiklik, tamamlanmamışlık',
  },
];

// 👇 Kart isimlerini dosya isimlerine mapliyoruz.
// assets/tarot klasörüne koyduğunu varsaydım, yolu kendine göre güncelle.
const tarotImages: Record<string, any> = {
  'The Fool': require('../assets/tarot/fool.png'),
  'The Magician': require('../assets/tarot/magician.png'),
  'The High Priestess': require('../assets/tarot/highpriests.png'),
  'The Empress': require('../assets/tarot/empress.png'),
  'The Emperor': require('../assets/tarot/emperor.png'),
  'The Hierophant': require('../assets/tarot/hierophant.png'),
  'The Lovers': require('../assets/tarot/lovers.png'),
  'The Chariot': require('../assets/tarot/chariot.png'),
  Strength: require('../assets/tarot/strength.png'),
  'The Hermit': require('../assets/tarot/hermit.png'),
  'Wheel of Fortune': require('../assets/tarot/wheelOfFortune.png'),
  Justice: require('../assets/tarot/justice.png'),
  'The Hanged Man': require('../assets/tarot/hangedMan.png'),
  Death: require('../assets/tarot/death.png'),
  Temperance: require('../assets/tarot/temperance.png'),
  'The Devil': require('../assets/tarot/death.png'), // bunu ayrıca ürettiysen
  'The Tower': require('../assets/tarot/tower.png'),
  'The Star': require('../assets/tarot/star.png'),
  'The Moon': require('../assets/tarot/moon.png'),
  'The Sun': require('../assets/tarot/sun.png'),
  Judgement: require('../assets/tarot/judgement.png'),
  'The World': require('../assets/tarot/world.png'),
};

type CardWithImage = TarotCard & { image: any };

const CARDS_WITH_IMAGES: CardWithImage[] = TAROT_CARDS.map((card) => ({
  ...card,
  image: tarotImages[card.name],
}));

const TarotScreen: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardWithImage | null>(null);

  return (
    <View className="flex-1 bg-slate-950">
      {/* Header */}
      <View className="px-4 pb-4 pt-12">
        <Text className="text-2xl font-bold text-white">✨ Tarot Koleksiyonu</Text>
        <Text className="mt-1 text-sm text-slate-300">
          Kartlara dokunarak anlamlarını görebilirsin.
        </Text>
      </View>

      {/* Kart Grid'i */}
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="flex-row flex-wrap gap-3 px-3">
          {CARDS_WITH_IMAGES.map((card) => (
            <TouchableOpacity
              key={card.name}
              className="w-[47%] items-center rounded-2xl bg-slate-900 p-3"
              onPress={() => setSelectedCard(card)}
              activeOpacity={0.8}>
              <Image
                source={card.image}
                className="mb-2 h-40 w-full rounded-xl"
                resizeMode="contain"
              />
              <Text className="text-center text-base font-semibold text-white">{card.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal: Kart Detayı */}
      <Modal
        transparent
        visible={!!selectedCard}
        animationType="fade"
        onRequestClose={() => setSelectedCard(null)}>
        <View className="flex-1 items-center justify-center bg-black/60 px-6">
          <View className="w-full rounded-3xl bg-slate-900 p-5">
            {selectedCard && (
              <>
                <View className="mb-3 items-center">
                  <Image
                    source={selectedCard.image}
                    className="mb-3 h-56 w-40 rounded-2xl"
                    resizeMode="contain"
                  />
                  <Text className="text-center text-xl font-bold text-white">
                    {selectedCard.name}
                  </Text>
                </View>

                <Text className="mb-1 font-semibold text-slate-200">Düz Anlamı</Text>
                <Text className="mb-3 text-sm text-slate-300">{selectedCard.meaning}</Text>

                <Text className="mb-1 font-semibold text-slate-200">Ters Anlamı</Text>
                <Text className="mb-4 text-sm text-slate-300">{selectedCard.reversed}</Text>

                <Pressable
                  className="mt-2 items-center rounded-2xl bg-indigo-500 py-3"
                  onPress={() => setSelectedCard(null)}>
                  <Text className="font-semibold text-white">Kapat</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TarotScreen;
