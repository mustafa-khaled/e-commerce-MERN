import { formatCurrency } from "@/lib/formatters";
import { Product } from "@/types";
import AddToCart from "./AddToCart";
import Image from "next/image";

export default function MenuItem({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={140}
          height={140}
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-primary font-bold my-2">
          {formatCurrency(product.basePrice)}
        </p>
        <AddToCart item={product} />
      </div>
    </div>
  );
}
