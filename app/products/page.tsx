"use server";

import { getAllBicycle } from "@/lib/services/product.service";
import { Bike } from "lucide-react";
import Link from "next/link";

export default async function Products() {
  const products = await getAllBicycle();

  return (
    <>
      <h1>
        Products <Bike />
      </h1>
      {products.map((product) => (
        <div key={product.id}>
          Name: {product.name} / Detail:{" "}
          <Link href={"/products/" + product.id}>click here</Link>
        </div>
      ))}
    </>
  );
}
