import { Food } from '@/app';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// createApi
export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5174',
  }),
  tagTypes: ['foods'],
  endpoints: (builder) => ({
    getFoods: builder.query<Food[], void>({
      query: () => '/foods',
      providesTags: ['foods'],
    }),
  }),
});

export const { useGetFoodsQuery } = foodApi;
