import express from "express";
import "express-async-errors";

import { routes } from "@/routes";
import { errorHandling } from "@/middlewares/error-handling";
import swaggerFile from "./swagger.json";

import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(errorHandling);

export { app };
