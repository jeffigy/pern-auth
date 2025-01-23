import "express-async-errors";
import express from "express";
import cors from "cors";
import corsOption from "./config/corsOption";
import apiRoute from "./routes";
import errorHandler from "./middlewares/errorHandler";
import { connectDb } from "./db";
import cookieParser from "cookie-parser";

connectDb();
const app = express();

app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoute);

app.use(errorHandler);

export default app;
