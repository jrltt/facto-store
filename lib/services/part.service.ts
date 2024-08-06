import { db } from "@/db/drizzle";

// TODO add pagination
export async function getParts() {
  return await db.query.PartTable.findMany();
}

// export async function getDetailPart(id: string) {}
// export async function createPart(data) {}
// export async function updatePart(data: {id: string, payload}) {}
// export async function deletePart(id: string) {}
