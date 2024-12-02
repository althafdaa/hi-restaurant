import { timestamp } from "drizzle-orm/pg-core";

export const defaultTimestamp = {
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
};
