import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { defaultTimestamp } from "~/schema.helper";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  hash: varchar({ length: 255 }).notNull(),
  role: varchar({ enum: ["super-admin", "admin", "customer"] })
    .notNull()
    .default("admin"),

  created_by: integer(),
  ...defaultTimestamp,
});

export const usersRelations = relations(usersTable, ({ one, many }) => ({
  createdBy: one(usersTable, {
    fields: [usersTable.created_by],
    references: [usersTable.id],
    relationName: "created_by",
  }),
}));
