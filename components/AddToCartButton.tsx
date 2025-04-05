"use client";

import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  const handleAddToCart = () => {
    window.alert("Added to cart");
  };
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          "w-full text-shop_light_bg bg-shop_dark_green/80 shadow-none border border-shop_dark_green/80 font0semi-bold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
          className
        )}
      >
        <ShoppingBagIcon /> {isOutOfStock ? "Out of stock" : "Add to cart"}
      </Button>
    </div>
  );
};
export default AddToCartButton;
