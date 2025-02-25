"use client";

import { getCartQuantity } from "@/lib/cart";
import {
  selectCartItems,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Image from "next/image";

export default function CartItems() {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const cleanCart = () => {
    dispatch(clearCart());
  };

  const cartQuantity = getCartQuantity(cart);

  return (
    <div className="bg-gray-300 p-4 w-full max-w-2xl mx-auto">
      {cart.length ? (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded-lg shadow"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Size: {item.size || "N/A"}</p>
                <p className="text-gray-900 font-medium">
                  ${item.basePrice * (item.quantity || 1)}
                </p>

                {/* Quantity Control */}
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateItemQuantity({ id: item.id, type: "decrease" })
                      )
                    }
                    className="px-3 py-1 bg-gray-300 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="px-3 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateItemQuantity({ id: item.id, type: "increase" })
                      )
                    }
                    className="px-3 py-1 bg-blue-500 text-white rounded text-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(removeItemFromCart({ id: item.id }))
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
            onClick={cleanCart}
          >
            Clean cart!!!! {cartQuantity}
          </button>
        </div>
      ) : (
        <p className="text-center">No items in your cart!</p>
      )}
    </div>
  );
}
