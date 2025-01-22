import { eq } from "drizzle-orm";
import db from "../db";
import users from "../db/schema/user.schema";

export const findOrCreateUser = async (
  email: string,
  name: string,
  picture: string
) => {
  let user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) {
    const newUser = { email, name, picture };
    const insertUser = await db.insert(users).values(newUser).returning();
    user = insertUser;
  }

  return user[0];
};
