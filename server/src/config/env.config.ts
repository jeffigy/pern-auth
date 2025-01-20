import "dotenv/config";

export const PORT = process.env.PORT || 3000;
export const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID || "";
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET || "";
export const CORS_WHITELIST = process.env.CORS_WHITELIST
  ? process.env.CORS_WHITELIST.split(",")
  : [];
export const DATABASE_URI = process.env.DATABASE_URI || "";
export const JWT_SECRET = process.env.TOKEN || "";
