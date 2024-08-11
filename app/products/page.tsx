"use server";

import { getAllBicycle } from "@/lib/services/product.service";
import { Bike } from "lucide-react";
import ProductItem from "./components/product-item";

export default async function Products() {
  const products = await getAllBicycle();

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
      <h1 className="flex text-xl font-bold gap-3 pb-6">
        Products <Bike />
      </h1>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product?.description}
        />
      ))}
    </div>
  );
}
