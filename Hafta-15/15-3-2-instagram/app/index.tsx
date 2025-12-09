import { usePosts } from '@/hooks/usePosts';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';

const Index = () => {
  const { data: posts, refetch: refetchPosts } = usePosts();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    refetchPosts();
    setIsRefreshing(false);
  };

  return (
    <View>
      <Link href={'/add'} className="self-start bg-blue-500 p-4 text-white">
        Resim eklemeye git
      </Link>

      <FlatList
        data={posts?.slice().reverse()}
        keyExtractor={(post) => post.id}
        contentContainerClassName="gap-4 pb-16"
        renderItem={({ item }) => (
          <View className="gap-2 rounded ">
            <Image
              source={{ uri: item.imageUrl }}
              style={{ height: 300, width: '100%' }}
              resizeMode="cover"
            />
            <Text className="p-4">{item.description}</Text>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
      />
    </View>
  );
};

export default Index;
