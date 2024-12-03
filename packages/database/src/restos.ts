import { relations, sql } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { adminsToRestosTable } from "./admins-to-restos";
import { defaultTimestamp } from "./schema.helper";
import { tablesTable } from "./tables";
import { usersTable } from "./users";

export const restosTable = pgTable("restos", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar({ length: 255 }).notNull(),

  /**
   * FK
   */
  created_by: integer()
    .notNull()
    .references(() => usersTable.id),
  last_updated_by: integer()
    .notNull()
    .references(() => usersTable.id),
  ...defaultTimestamp,
});
export const restosRelations = relations(restosTable, ({ one, many }) => {
  return {
    admins_restos: many(adminsToRestosTable),
    tables: many(tablesTable),
    created_by_user: one(usersTable, {
      references: [usersTable.id],
      fields: [restosTable.created_by],
      relationName: "created_by_user",
    }),
    last_updated_by_user: one(usersTable, {
      references: [usersTable.id],
      fields: [restosTable.last_updated_by],
      relationName: "last_updated_by_user",
    }),
  };
});
