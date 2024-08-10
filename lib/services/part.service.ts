import { db } from "@/db/drizzle";
import { PartOptionTable, PartTable } from "@/db/schema";
import { sql } from "drizzle-orm";

// TODO add pagination
export async function getParts() {
  return await db.query.PartTable.findMany();
}

export async function getPartsWithOptions() {
  return await db
    .select({
      partId: PartTable.id,
      partName: PartTable.name,
      partDescription: PartTable.description,
      partCategory: PartTable.category,
      partOptions: sql`
      COALESCE(
        json_agg(
          json_build_object(
            'partOptionId', ${PartOptionTable.id},
            'name', ${PartOptionTable.name},
            'price', ${PartOptionTable.price},
            'stock', ${PartOptionTable.stock},
            'stockNumber', ${PartOptionTable.stockNumber}
          )
        ) FILTER (WHERE ${PartOptionTable.id} IS NOT NULL), '[]'
      )
    `.as("partOptions"),
    })
    .from(PartTable)
    .leftJoin(PartOptionTable, sql`${PartTable.id} = ${PartOptionTable.partId}`)
    .groupBy(PartTable.id)
    .orderBy(PartTable.category);
}

// export async function getDetailPart(id: string) {}
// export async function createPart(data) {}
// export async function updatePart(data: {id: string, payload}) {}
// export async function deletePart(id: string) {}
