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

const initialCartItems = localStorage.getItem("cartItems");

const initialState: CartState = {
  items: initialCartItems ? JSON.parse(initialCartItems) : [],
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
      action: PayloadAction<{ id: number; type: "increase" | "decrease" }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (action.payload.type === "increase") {
          item.quantity = (item.quantity || 1) + 1;
        } else if (action.payload.type === "decrease" && item.quantity! > 1) {
          item.quantity! -= 1;
        } else {
          // Remove item if quantity is 1 and user decreases
          state.items = state.items.filter((i) => i.id !== item.id);
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
