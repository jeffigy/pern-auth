import { sign } from "jsonwebtoken";
import { User } from "../types/user.types";
import {
  ACCESS_TOKEN_SECRET,
  NODE_ENV,
  REFRESH_TOKEN_SECRET,
} from "../config/env.config";
import { Response } from "express";
import axios from "axios";
export const generateAccessToken = (payload: User) => {
  return sign({ userInfo: payload }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: string, res: Response) => {
  const refreshToken = sign({ userId: payload }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  return refreshToken;
};

export const getGoogleUserInfo = async (accessToken: string) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return data;
};
