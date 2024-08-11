import { getProductsWithPartOptions } from "@/lib/services/product.service";
import { ProductsList } from "./components/product-list";

export default async function Products() {
  const products = await getProductsWithPartOptions();

  return <ProductsList products={products} />;
}
