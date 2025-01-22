import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

const users = pgTable("users", {
  userId: varchar("user_id").primaryKey().$defaultFn(createId),
  name: text().notNull(),
  picture: varchar({
    length: 255,
  }),
  email: varchar().unique().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export default users;
