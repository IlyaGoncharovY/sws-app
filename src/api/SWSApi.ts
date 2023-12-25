import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {LinesListResponseChild, RequestAddNewLineType, ResponseAddNewLineType} from '../features/lineList/types';

export const SWSApi = createApi({
  reducerPath: 'SWSApi',
  tagTypes: ['Post_NewLine'],
  baseQuery: fetchBaseQuery(
    {baseUrl: 'http://185.244.172.108:8081/'},
  ),
  endpoints: builder => ({
    getAllLines: builder.query<LinesListResponseChild[], number>({
      query: (eID: number) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/list`,
      }),
      providesTags: result => ['Post_NewLine'],
    }),
    addNewLine: builder.mutation<ResponseAddNewLineType, {newLine: RequestAddNewLineType, eID: number}>({
      query: ({ newLine, eID }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/create`,
        method: 'POST',
        body: newLine,
      }),
      invalidatesTags: ['Post_NewLine'],
    }),
  }),
});
