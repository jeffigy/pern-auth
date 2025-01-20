import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from "../config/env.config";
import axios from "axios";

const oAuth2Client = new OAuth2Client({
  clientId: OAUTH_CLIENT_ID,
  clientSecret: OAUTH_CLIENT_SECRET,
  redirectUri: "http://localhost:5173",
});

export const googleAuth = async (req: Request, res: Response) => {
  const { code } = req.body;

  if (!code) {
    res.status(400).json({ error: "Authorization code is required" });
    return;
  }

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  console.info("Tokens acquired.");

  const { access_token } = tokens;

  if (!access_token) {
    res.status(500).json({ error: "Access token not found" });
    return;
  }

  const {
    data: { email, name, sub },
  } = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  res.json({ email, name, sub });
};
