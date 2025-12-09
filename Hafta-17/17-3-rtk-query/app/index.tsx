// rnfe
import { Button } from '@/components/Button';
import { useCounter } from '@/slices/counterSlice';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '@/slices/todoApi';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Index = () => {
  const { data: todos } = useGetTodosQuery();
  const { increment, count } = useCounter();
  const [addTodo, { isLoading: isAddLoading }] = useAddTodoMutation();
  const [deleteTodo, { isLoading: isDeleteLoading }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading: isUpdateLoading }] = useUpdateTodoMutation();

  return (
    <View className="flex-1 gap-4">
      <Button
        title={isAddLoading ? 'Ekleniyor...' : 'Todo Ekle'}
        onPress={() => addTodo({ title: 'Ekmek Al' })}
      />
      <Button title="Todo sil" onPress={() => deleteTodo(42)} />
      <Button title="Todo güncelle" onPress={() => updateTodo({ id: 42, title: 'Peynir Al' })} />
      <Button title="Arttır" onPress={increment} />
      <Text className="text-6xl">{count}</Text>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default Index;
