import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const existingItems = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItems) {
        existingItems.quantity = (existingItems.quantity || 0) + 1;
        existingItems.size = action.payload.size;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          item.quantity! -= 1;
        }
      }
    },

    removeItemFromCart: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addCartItem,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
