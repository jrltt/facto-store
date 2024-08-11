"use server";

import { getAllBicycle } from "@/lib/services/product.service";
import { Bike } from "lucide-react";
import ProductItem from "./components/product-item";

export default async function Products() {
  const products = await getAllBicycle();

  return (
    <>
      <h1 className="flex text-xl font-bold gap-3">
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
    </>
  );
}
