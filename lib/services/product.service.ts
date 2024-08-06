import { db } from "@/db/drizzle";

export async function getAllBicycle() {
  return await db.query.ProductTable.findMany();
}

export async function getFullBicycle(id: string) {
  if (!id) {
    throw new Error("Bicycle ID can not be null");
  }

  return await db.query.ProductTable.findFirst({
    where: (products, { eq }) => eq(products.id, id),
    with: {
      productParts: true,
    },
  });
}
