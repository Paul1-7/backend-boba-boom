import "dotenv/config";
import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import routerApi from "./routes";
import { errorHandler } from "./middlewares";

const app = express();
app.use(cors());
app.use(helmet());
app.use(json({ limit: "10mb" }));
app.use(urlencoded({ extended: true, limit: "10mb", parameterLimit: 50000 }));

routerApi(app);
app.use(errorHandler);

export default app;
