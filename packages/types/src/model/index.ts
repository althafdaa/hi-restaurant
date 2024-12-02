import {
  adminsToRestosTable,
  refreshTokensTable,
  restosTable,
  usersTable,
} from "@repo/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type z from "zod";

export const insertUserSchema = createInsertSchema(usersTable);
export type InsertUserSchema = z.infer<typeof insertUserSchema>;
export const selectUserSchema = createSelectSchema(usersTable);
export type SelectUserSchema = z.infer<typeof selectUserSchema>;

export const insertRestoSchema = createInsertSchema(restosTable);
export type InsertRestoSchema = z.infer<typeof insertRestoSchema>;
export const selectRestoSchema = createSelectSchema(restosTable);
export type SelectRestoSchema = z.infer<typeof selectRestoSchema>;

export const insertRefreshTokenSchema = createInsertSchema(refreshTokensTable);
export type InsertRefreshTokenSchema = z.infer<typeof insertRefreshTokenSchema>;
export const selectRefreshTokenSchema = createSelectSchema(refreshTokensTable);
export type SelectRefreshTokenSchema = z.infer<typeof selectRefreshTokenSchema>;

export const insertAdminsToRestosSchema =
  createInsertSchema(adminsToRestosTable);
export type InsertAdminsToRestosSchema = z.infer<
  typeof insertAdminsToRestosSchema
>;
export const selectAdminsToRestosSchema =
  createSelectSchema(adminsToRestosTable);
export type SelectAdminsToRestosSchema = z.infer<
  typeof selectAdminsToRestosSchema
>;
