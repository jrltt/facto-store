import { db } from "@/db/drizzle";
import { ProductTypes } from "@/db/schema";

// TODO add pagination
export async function getProducts() {
  return await db.query.ProductTable.findMany({
    with: { productPartOption: true },
    limit: 10,
  });
}

export async function getProductsWithPartOptions() {
  return await db.query.ProductTable.findMany({
    with: {
      productPartOption: {
        with: {
          partOption: {
            columns: { id: true, name: true, price: true, stock: true },
          },
        },
      },
    },
  });
}

export async function getProductPartOptions(productId: string) {
  return await db.query.ProductPartOptionTable.findFirst({
    where: (productPartOption, { eq }) =>
      eq(productPartOption.productId, productId),
    with: {
      partOption: {
        columns: { id: true, name: true, price: true, stock: true },
      },
    },
  });
}
// TODO refactor service and make it open to load different product types
export async function getAllBicycle() {
  return await db.query.ProductTable.findMany({
    where: (products, { eq }) => eq(products.productType, "bicycles"),
  });
}

export async function getProductDetail(id: string, type: ProductTypes) {
  return await db.query.ProductTable.findFirst({
    where: (products, { eq, and }) =>
      and(eq(products.id, id), eq(products.productType, type)),
    with: {
      productPartOption: {
        with: { partOption: true },
      },
    },
  });
}

export async function getFullBicycle(id: string) {
  if (!id) throw new Error("Bicycle ID can not be null");

  return await getProductDetail(id, "bicycles");
}
