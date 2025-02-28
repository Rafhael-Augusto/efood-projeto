import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio } from "../../components/RestaurantSelec/Product";

type CartState = {
  items: Cardapio[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<Cardapio>) => {
      state.items = state.items.filter(
        (item) => item.cardapio.newId !== action.payload.cardapio.newId
      );
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;
