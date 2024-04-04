import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const registries = sqliteTable("registries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  weight: text("weight").notNull(),
  date: text("date")
    .default(sql`CURRENT_DATE`)
    .notNull()
    .unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});
