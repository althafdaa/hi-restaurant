import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { defaultTimestamp } from "~/schema.helper";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  hash: varchar({ length: 255 }).notNull(),
  role: varchar({ enum: ["super-admin", "admin", "customer"] })
    .notNull()
    .default("admin"),
  ...defaultTimestamp,
});
