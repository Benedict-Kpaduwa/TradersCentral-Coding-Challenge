import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BaseCurrencyApiHeaders = {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': '1935c71faamsh00746550dcb5120p1289bcjsn7d6f8134391f'
}

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: BaseCurrencyApiHeaders})

export const BaseCurrencyApi = createApi({
    reducerPath: "BaseCurrencyApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getBaseCurrency: builder.query({
            query: () => createRequest("/coins/list/name")
        })
    })
})

export const {
    useGetBaseCurrencyQuery,
} = BaseCurrencyApi;




// var options = {
//     method: 'GET',
//     url: 'https://coingecko.p.rapidapi.com/coins/list',
//     headers: {
//       'x-rapidapi-host': 'coingecko.p.rapidapi.com',
//       'x-rapidapi-key': '1935c71faamsh00746550dcb5120p1289bcjsn7d6f8134391f'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });