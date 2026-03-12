import { Router } from "express";
import { contactRoutes } from "./contact-routes";

const routes = Router();

routes.use("/contacts", contactRoutes);
export { routes };
