import { Request, Response } from "express";
import { User } from "../types/user.types";
import {
  generateAccessToken,
  generateRefreshToken,
  getGoogleUserInfo,
} from "../utils/auth.utils";
import oAuth2Client from "../config/oauth.config";
import { findOrCreateUser } from "../services/auth.service";
import { NODE_ENV } from "../config/env.config";

export const googleAuth = async (req: Request, res: Response) => {
  const { code } = req.body;

  if (!code) {
    res.status(400).json({ error: "Authorization code is required" });
    return;
  }

  const {
    tokens: { access_token },
  } = await oAuth2Client.getToken(code);

  if (!access_token) {
    res.status(500).json({ error: "Access token not found" });
    return;
  }

  const { name, picture, email } = await getGoogleUserInfo(access_token);

  if (!email) {
    res
      .status(500)
      .json({ message: "Incomplete user information from Google" });
    return;
  }

  const user = await findOrCreateUser(email, name, picture);
  const accessToken = generateAccessToken(user as User);
  generateRefreshToken(user.userId, res);

  res.json(accessToken);
};

export const logout = (req: Request, res: Response) => {
  const cookie = req.cookies;

  if (!cookie.jwt) {
    res.status(400).json({ message: "No token provided" });
    return;
  }
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: NODE_ENV !== "development",
    sameSite: "strict",
  });

  res.json({ message: "Logged out successfully" });
};
