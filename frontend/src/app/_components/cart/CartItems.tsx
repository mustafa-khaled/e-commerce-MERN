"use client";

import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function CartItems() {
  const cart = useAppSelector(selectCartItems);

  console.log(cart);
  return <div className="bg-gray-300 p-4">CartItems</div>;
}
