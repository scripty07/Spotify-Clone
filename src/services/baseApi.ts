import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Posts[], void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      //   Provide tags to create 'validation to recall itself'
      providesTags: ['Posts'],
    }),

    deletePosts: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      // Refetch data for which API(here - Posts)
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery } = baseApi;
