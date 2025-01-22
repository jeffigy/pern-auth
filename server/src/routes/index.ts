import { Router } from "express";
import authRoute from "./auth.routes";

const apiRoute = Router();

apiRoute.use("/auth", authRoute);

export default apiRoute;
