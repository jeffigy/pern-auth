import { User } from "./user.types";

export type DecodedToken = {
  userInfo: User;
  exp: number;
  iat: number;
};
