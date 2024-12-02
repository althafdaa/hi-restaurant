import { usersTable } from "@repo/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type z from "zod";

export const insertUserSchema = createInsertSchema(usersTable);
export type InsertUserSchema = z.infer<typeof insertUserSchema>;
export const selectUserSchema = createSelectSchema(usersTable);
export type SelectUserSchema = z.infer<typeof selectUserSchema>;
