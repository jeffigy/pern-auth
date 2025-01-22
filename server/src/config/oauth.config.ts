import { OAuth2Client } from "google-auth-library";
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from "./env.config";

const oAuth2Client = new OAuth2Client({
  clientId: OAUTH_CLIENT_ID,
  clientSecret: OAUTH_CLIENT_SECRET,
  redirectUri: "http://localhost:5173",
});

export default oAuth2Client;
