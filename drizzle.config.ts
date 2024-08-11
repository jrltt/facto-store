import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
});
