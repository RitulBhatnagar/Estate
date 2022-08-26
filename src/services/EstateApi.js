import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const estateApiHeader = {
  'X-RapidAPI-Key': 'e53e2ef485mshfbcb69af9d7a538p11c32ejsn068502999d52',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

const createRequest = (url) => ({url , headers : estateApiHeader})

export const estateApi = createApi({
  reducerPath : "estateApi",
  baseQuery : fetchBaseQuery({baseUrl :  'https://bayut.p.rapidapi.com'}),
  endpoints : (builder) => ({
    getPropertyListForSale : builder.query({
      query : () => createRequest(`/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`)
    }),
    getPropertyListForRent : builder.query({
      query : () => createRequest(`/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`)
    }),
    getPropertyForRentByFilter : builder.query({
      query : ({ categoryExternalID, rentFrequency, minPrice, maxPrice,  sort}) => createRequest(`/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage='25'&categoryExternalID=${categoryExternalID}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&sort=${sort})`)
    }),
    getPropertyForSaleByFilter : builder.query({
          query : ({categoryExternalID, rentFrequency, minPrice, maxPrice,  sort}) => createRequest(`/poperties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage='25'&categoryExternalID=${categoryExternalID}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&sort=${sort})`)
    }),
    getPropertyDetailsById : builder.query({
      query : (id) => createRequest(`/properties/detail?externalID=${id}`)
    })
  }),
 
})

export  const {
  useGetPropertyListForSaleQuery,
   useGetPropertyListForRentQuery,
   useGetPropertyForRentByFilterQuery,
   useGetPropertyForSaleByFilterQuery,
    useGetPropertyDetailsByIdQuery
} = estateApi;