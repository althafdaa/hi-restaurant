import { relations } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { restosTable } from "./restos";
import { defaultTimestamp } from "./schema.helper";
import { usersTable } from "./users";

export const tablesTable = pgTable("tables", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  resto_id: uuid()
    .notNull()
    .references(() => restosTable.id),

  last_updated_by: integer().references(() => usersTable.id),
  ...defaultTimestamp,
});

export const tablesRelaations = relations(tablesTable, ({ one, many }) => {
  return {
    resto: one(restosTable, {
      references: [restosTable.id],
      fields: [tablesTable.resto_id],
    }),
    last_updated_by: one(usersTable, {
      references: [usersTable.id],
      fields: [tablesTable.last_updated_by],
    }),
  };
});
