import { db } from "@/db/drizzle";

// TODO refactor service and make it open to load different product types
export async function getAllBicycle() {
  return await db.query.ProductTable.findMany({
    where: (products, { eq }) => eq(products.type, "bicycles"),
  });
}

export async function getFullBicycle(id: string) {
  if (!id) throw new Error("Bicycle ID can not be null");

  return await db.query.ProductTable.findFirst({
    where: (products, { eq }) => eq(products.id, id),
    with: {
      productPartOption: true,
    },
  });
}
