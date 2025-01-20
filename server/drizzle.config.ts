import { defineConfig } from "drizzle-kit";
import { DATABASE_URI } from "./src/config/env.config";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URI,
  },
});
