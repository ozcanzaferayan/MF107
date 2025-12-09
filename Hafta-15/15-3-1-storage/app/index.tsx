import { Button } from '@/components/Button';
import { storage } from '@/services/firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { Image, View } from 'react-native';

const Index = () => {
  // usss
  const [imageUrl, setImageUrl] = useState<string>();

  const handleImage = async () => {
    // Resim seçtirmek içindir.
    // Direkt resim seçiminde izin almamıza gerek yoktur
    // Seçilen resmin url'i result değişkenine aktarılır
    const result = await ImagePicker.launchImageLibraryAsync({
      // Resim veya video seçimi için
      mediaTypes: ['images', 'videos', 'livePhotos'],
      // Kırpma olacak mı: evet
      allowsEditing: true,
      // Kırpma oranı
      // width, height
      aspect: [1, 1],
      // Sıkıştırma için verilir. Değer azaltdıkça kalite düşer
      // 0: çok sıkıştır
      // 1: orijinali koru
      quality: 0.8,
    });

    if (result.assets) {
      // Ornek URL:
      // file:///Users/zaferayan/Library/Developer/CoreSimulator/blabla.jpg
      setImageUrl(result.assets[0].uri);
    }
  };

  const handleUpload = async () => {
    // 1. Dosyayı blob'a çevir
    // ======
    // Dosya URL'ini alıp bir byte object haline getiricez
    // Bu sayede firebase'e atabileceğiz
    const response = await fetch(imageUrl as string);
    const blob = await response.blob();
    // 2. Firebase için dosya referansı oluştur
    // ======
    // Firebase tarafında bu dosyayı hangi isimle ve nerede tutacağımıza karar veriyoruz
    // Aşağıdaki gibi bir dosya yolundan dosyanın adını çekiyoruz.
    // file:///Users/zaferayan/Library/Developer/CoreSimulator/blabla.jpg
    const filename = imageUrl?.substring(imageUrl.lastIndexOf('/') + 1);
    const storageRef = ref(storage, filename);
    // 3. Firebase'e yükle
    await uploadBytes(storageRef, blob);

    // 4. Opsiyonel: Dosyanın URL'ini alma
    // ===
    // Dosya yüklendikten sonra ilgili URL'i database'e yazmak isteyebiliriz
    // O nedenle dosya url'i almamız gereklidir
    const downloadUrl = await getDownloadURL(storageRef);
    alert('Dosya yüklendi: ' + downloadUrl);
  };

  return (
    <View>
      <Button title="Resim seç" onPress={handleImage} />
      <Image source={{ uri: imageUrl }} style={{ width: 300, height: 300 }} />
      {imageUrl && <Button title="Firebase yükle" onPress={handleUpload} />}
    </View>
  );
};

export default Index;
