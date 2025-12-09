// rnfe
import { Button } from '@/components/Button';
import { db } from '@/services/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export type Product = {
  id: string;
  title: string;
};

const Index = () => {
  // usss
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('');

  // uffs
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    // Tablonun ref'ini getirelim
    const productsRef = collection(db, 'products');
    // Snapshot getiricez
    // snapshot = Tablonun o anki halini getirelim array olarak
    const snapshot = await getDocs(productsRef);
    const snapProducts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(snapProducts as Product[]);
  };

  const handleAdd = async () => {
    // Tablonun ref'ini getirelim
    const productsRef = collection(db, 'products');
    // document: product ekliycez
    await addDoc(productsRef, { title: title, createdAt: new Date() });
    getProducts();
  };

  const handleDelete = async (id: string) => {
    // Doc'u getirelim
    const productRef = doc(db, 'products', id);
    await deleteDoc(productRef);
    getProducts();
  };

  const handleEdit = async (id: string) => {
    // Doc'u getirelim
    const productRef = doc(db, 'products', id);
    await updateDoc(productRef, { title: title, updatedAt: new Date() });
    getProducts();
  };

  return (
    <View>
      <TextInput className="border p-4" value={title} onChangeText={setTitle} />
      <Button title="Add" onPress={handleAdd} />
      {products.map((product) => (
        <View key={product.id}>
          <Text>{product.title}</Text>
          <Text
            className="self-start bg-red-500 p-4 text-white"
            onPress={() => handleDelete(product.id)}>
            Sil
          </Text>
          <Text
            className="self-start bg-blue-500 p-4 text-white"
            onPress={() => handleEdit(product.id)}>
            Düzenle
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Index;
