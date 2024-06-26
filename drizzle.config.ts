import { defineConfig, type Config } from "drizzle-kit";

export default defineConfig({
  schema: "./server/database/schema.ts",
  out: "./server/database/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "sqlite.db",
  },
}) satisfies Config;
