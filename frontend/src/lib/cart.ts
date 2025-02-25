import { CartItem } from "@/redux/features/cart/cartSlice";

export const getCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((quantity, item) => item.quantity! + quantity, 0);
};

export const getItemQuantity = (id: number | string, cart: CartItem[]) => {
  return cart.find((item) => item.id === id)?.quantity || 0;
};

export const getSubTotal = (cart: CartItem[]) => {
  return cart.reduce(
    (total, cartItem) => total + cartItem.basePrice * cartItem.quantity!,
    0
  );
};
