"use client";

import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { Product } from "@/types";
import Button from "@/components/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";

const sizes = [
  { id: 1, name: "S", price: 0 },
  { id: 2, name: "M", price: 5 },
  { id: 3, name: "L", price: 10 },
  { id: 4, name: "XL", price: 15 },
];

export default function AddToCart({ item }: { item: Product }) {
  const cart = useAppSelector(selectCartItems);
  const defaultSize = cart.find((el) => el.id === item.id)?.size || "S";

  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);

  const selectedSizeObj = sizes.find((size) => size.name === selectedSize);
  const finalPrice = item.basePrice + (selectedSizeObj?.price || 0);

  const handleAddToCart = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Add To Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Select Size</Label>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="grid grid-cols-4 gap-2"
            >
              {sizes.map((size) => (
                <Label
                  key={size.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <RadioGroupItem value={size.name} />
                  {size.name}
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            className="w-full"
            disabled={!selectedSize}
            onClick={handleAddToCart}
          >
            Add To Cart ({formatCurrency(finalPrice)})
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
