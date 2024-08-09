"use server";

import { getAllBicycle } from "@/lib/services/product.service";

export default async function Products() {
  const products = await getAllBicycle();

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>Name: {product.name}</div>
      ))}
    </>
  );
}
