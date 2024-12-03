import { relations } from "drizzle-orm";
import { integer, primaryKey, uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { restosTable } from "./restos";
import { usersTable } from "./users";

export const adminsToRestosTable = pgTable(
  "admins_restos",
  {
    resto_id: uuid()
      .notNull()
      .references(() => restosTable.id),
    admin_id: integer()
      .notNull()
      .references(() => usersTable.id),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.resto_id, t.admin_id] }),
    };
  },
);
export const adminsToRestosRelations = relations(
  adminsToRestosTable,
  ({ one }) => {
    return {
      admin: one(usersTable, {
        references: [usersTable.id],
        fields: [adminsToRestosTable.admin_id],
      }),
      resto: one(restosTable, {
        references: [restosTable.id],
        fields: [adminsToRestosTable.resto_id],
      }),
    };
  },
);
