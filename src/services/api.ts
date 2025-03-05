import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "../components/Home/Restaurant";

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: string;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

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
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantQuery, useGetPlatesQuery, usePurchaseMutation } =
  api;

export default api;
