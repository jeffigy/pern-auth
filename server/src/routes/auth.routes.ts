import { Router } from "express";
import { googleAuth, logout } from "../controllers/auth.controller";

const authRoute = Router();

authRoute.route("/google").post(googleAuth);
authRoute.route("/logout").post(logout);
export default authRoute;
