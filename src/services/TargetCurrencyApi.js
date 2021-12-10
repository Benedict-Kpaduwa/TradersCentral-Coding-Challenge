import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TargetCurrencyApiHeaders = {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': '1935c71faamsh00746550dcb5120p1289bcjsn7d6f8134391f'
}

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: TargetCurrencyApiHeaders})

export const TargetCurrencyApi = createApi({
    reducerPath: "TargetCurrencyApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getTargetCurrency: builder.query({
            query: () => createRequest("/simple/supported_vs_currencies")
        })
    })
})

export const {
    useGetTargetCurrencyQuery
} = TargetCurrencyApi;



// var options = {
//     method: 'GET',
//     url: 'https://coingecko.p.rapidapi.com/simple/supported_vs_currencies',
//     headers: {
//       'x-rapidapi-host': 'coingecko.p.rapidapi.com',
//       'x-rapidapi-key': '1935c71faamsh00746550dcb5120p1289bcjsn7d6f8134391f'
//     }
//   };