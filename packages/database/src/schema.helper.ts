import { timestamp } from "drizzle-orm/pg-core";
import { v7 } from "uuid";

export const defaultTimestamp = {
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
};

export const generateUUIDV7 = () => {
  return v7();
};
