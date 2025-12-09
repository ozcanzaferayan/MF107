import { Button } from '@/components/Button';
import { useAddPost } from '@/hooks/useAddPost';
import { storage } from '@/services/firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';

const Add = () => {
  // usss
  const [imageUrl, setImageUrl] = useState<string>();
  const [description, setDescription] = useState<string>();

  const { mutate: sendPost } = useAddPost();

  const handleUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.75,
    });

    if (!result.assets) {
      alert('Lütfen resim seçiniz');
      return;
    }

    const imagePath = result.assets[0].uri;
    // 1. Blob oluştur
    const response = await fetch(imagePath);
    const blob = await response.blob();
    // 2. Firebase için referans oluştur
    const filename = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    const storageRef = ref(storage, filename);
    // 3. Firebase'e yükle
    await uploadBytes(storageRef, blob);
    // 4. Dosya URL al ve state'e set et
    const downloadUrl = await getDownloadURL(storageRef);
    setImageUrl(downloadUrl);
    alert('Yükleme başarılı.');
  };

  const handleSend = async () => {
    if (!imageUrl) {
      alert('Henüz resim seçmediniz');
      return;
    }
    if (!description) {
      alert('Lütfen bir açıklama metni giriniz');
      return;
    }

    sendPost({
      imageUrl,
      description,
    });

    router.back();
  };

  const handleCamera = async () => {
    // 1. Kamera izni al
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    // Izin verilmediyse alert göster
    if (status !== 'granted') {
      alert('Kamera izni gerekli');
      return;
    }

    // 2. Kamera aç
    const result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.75,
    });

    if (result.canceled) {
      alert('Iptal ettiniz');
      return;
    }

    const imagePath = result.assets[0].uri;
    // 1. Blob oluştur
    const response = await fetch(imagePath);
    const blob = await response.blob();
    // 2. Firebase için referans oluştur
    const filename = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    const storageRef = ref(storage, filename);
    // 3. Firebase'e yükle
    await uploadBytes(storageRef, blob);
    // 4. Dosya URL al ve state'e set et
    const downloadUrl = await getDownloadURL(storageRef);
    setImageUrl(downloadUrl);
    alert('Yükleme başarılı.');
  };

  return (
    <View>
      <TextInput
        className="border p-4"
        placeholder="Açıklama giriniz"
        value={description}
        onChangeText={setDescription}
      />
      <View className="flex-row gap-4">
        <Button title="Resim Yükle" onPress={handleUpload} />
        <Button title="Resim Çek" onPress={handleCamera} />
      </View>
      <Image source={{ uri: imageUrl }} style={{ width: 300, height: 300 }} />
      <Button title="Gönderiyi Paylaş" onPress={handleSend} />
    </View>
  );
};

export default Add;
