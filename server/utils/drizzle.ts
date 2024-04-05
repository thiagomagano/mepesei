export { sql, eq, and, or, desc } from "drizzle-orm";

import * as schema from "../database/schema";

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");

export const tables = schema;

export function useDrizzle() {
  return drizzle(sqlite, { schema });
}

export type Registry = typeof schema.registries.$inferSelect;
