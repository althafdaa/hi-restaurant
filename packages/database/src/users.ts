import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { adminsToRestosTable } from "./admins-to-restos";
import { refreshTokensTable } from "./refresh-tokens";
import { defaultTimestamp } from "./schema.helper";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  hash: varchar({ length: 255 }).notNull(),
  role: varchar({ enum: ["super-admin", "admin", "customer"] })
    .notNull()
    .default("admin"),

  /**
   * FK
   */
  created_by: integer(),
  last_updated_by: integer(),
  ...defaultTimestamp,
});

export const usersRelations = relations(usersTable, ({ one, many }) => ({
  users_created_by_user: one(usersTable, {
    references: [usersTable.id],
    fields: [usersTable.created_by],
    relationName: "users_created_by_user",
  }),
  users_last_updated_by_user: one(usersTable, {
    references: [usersTable.id],
    fields: [usersTable.last_updated_by],
    relationName: "users_last_updated_by_user",
  }),
  refresh_tokens: many(refreshTokensTable),
  admins_restos: many(adminsToRestosTable),
  restos_created_by_user: many(adminsToRestosTable, {
    relationName: "restos_created_by_user",
  }),
  restos_last_updated_by_user: many(adminsToRestosTable, {
    relationName: "restos_last_updated_by_user",
  }),

  tables_created_by_user: many(adminsToRestosTable, {
    relationName: "tables_created_by_user",
  }),
  tables_last_updated_by_user: many(adminsToRestosTable, {
    relationName: "tables_last_updated_by_user",
  }),
}));
