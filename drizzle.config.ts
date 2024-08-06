import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/drizzle.ts",
  out: "./dist/db",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
});
