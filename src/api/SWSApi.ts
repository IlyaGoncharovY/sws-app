import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {
  LinesListResponseChild,
  RequestAddNewLineType,
  ResponseAddNewLineType,
  ResponseDeleteLine,
} from '../features/lineList/';

// const baseUrl = process.env.NODE_ENV === 'production'
//   ? 'https://185.244.172.108:8081/'
//   : 'http://185.244.172.108:8081/';

export const SWSApi = createApi({
  reducerPath: 'SWSApi',
  tagTypes: ['Post_NewLine'],
  baseQuery: fetchBaseQuery(
    {baseUrl: 'http://185.244.172.108:8081/'},
  ),
  endpoints: builder => ({
    getAllLines: builder.query<LinesListResponseChild[], number>({
      query: (eID: number) => ({
        url: `v1/outlay-rows/entity/${eID}/row/list`,
      }),
      providesTags: result => ['Post_NewLine'],
    }),
    addNewLine: builder.mutation<ResponseAddNewLineType, {newLine: RequestAddNewLineType, eID: number}>({
      query: ({ newLine, eID }) => ({
        url: `v1/outlay-rows/entity/${eID}/row/create`,
        method: 'POST',
        body: newLine,
      }),
      invalidatesTags: ['Post_NewLine'],
    }),
    deleteLines: builder.mutation<ResponseDeleteLine, {eID: number, rID: number}>({
      query: ({eID, rID}) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post_NewLine'],
    }),
    updateLine: builder.mutation<ResponseAddNewLineType, {updatedLine: RequestAddNewLineType, eID: number, rID: number}>
    ({
      query: ({ updatedLine, eID, rID }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
        method: 'POST',
        body: updatedLine,
      }),
      invalidatesTags: ['Post_NewLine'],
    }),
  }),
});
