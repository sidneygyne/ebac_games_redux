import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export default api
export const { useGetJogosQuery } = api
