import { Router } from "express";
import { googleAuth } from "../controllers/auth.controller";

const authRoute = Router();

authRoute.route("/google").post(googleAuth);
export default authRoute;
