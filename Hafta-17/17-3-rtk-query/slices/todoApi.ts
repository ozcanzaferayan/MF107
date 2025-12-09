import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export const todoApi = createApi({
  // reducer'ın adını belirtir
  reducerPath: 'todoApi',
  // Fetch API kullanarak çekmesini sağlar
  // Istersek kendi query metodumuzu da yazabiliyoruz.
  //   Orneğin axios kullanan bir query yazabiliriz
  //   Ama bu senior level bir konu
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://jsonplaceholder.typicode.com',
    baseUrl: 'http://localhost:5174',
  }),
  // cache'te tutulacak nesnelerin isimlerini belirtiz
  tagTypes: ['todos', 'users'],
  endpoints: (builder) => ({
    // get işlemleri sadece veri getirdiği için builder.query kullandık
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['todos'],
    }),
    getTodo: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
    }),
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['users'],
    }),
    // add işlemi ekleme olduğu için builder.mutation kullanıyoruz
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      // Ekleme sonrası cache'i resetleyip, todos'un tekrar çekilmesini sağlıyoruz
      invalidatesTags: ['todos'],
    }),
    // delete işlemi bir mutation'dır
    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos'],
    }),
    // update bir kayıt değiştirdiği için mutation'dır
    updateTodo: builder.mutation<Todo, Partial<Todo>>({
      query: ({ id, ...patchParams }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: patchParams,
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useGetUsersQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
