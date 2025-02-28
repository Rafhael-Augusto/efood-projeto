import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "../components/Home/Restaurants";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => "restaurantes",
    }),
    getPlates: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetRestaurantQuery, useGetPlatesQuery } = api;

export default api;
