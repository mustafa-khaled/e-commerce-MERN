import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  name: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: string;
};

export type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
