import { Pool } from "@neondatabase/serverless";
import { DATABASE_URI } from "../config/env.config";
import { drizzle } from "drizzle-orm/node-postgres";
const pool = new Pool({
  connectionString: DATABASE_URI,
});

export const connectDb = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("connected to db");
  } catch (error) {
    console.log("Error connecting to db", error);
    process.exit(1);
  }
};

const db = drizzle({ client: pool });

export default db;
