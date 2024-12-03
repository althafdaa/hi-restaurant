import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { defaultTimestamp } from "./schema.helper";
import { usersTable } from "./users";

export const refreshTokensTable = pgTable("refresh_tokens", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  token: varchar({ length: 255 }).notNull().unique(),
  access_token: varchar({ length: 255 }).notNull().unique(),

  /**
   * fk
   */
  user_id: integer()
    .notNull()
    .references(() => usersTable.id),
  ...defaultTimestamp,
});
export const refreshTokensRelations = relations(
  refreshTokensTable,
  ({ one }) => ({
    user: one(usersTable, {
      references: [usersTable.id],
      fields: [refreshTokensTable.user_id],
      relationName: "user",
    }),
  }),
);
