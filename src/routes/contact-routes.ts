import { Router } from "express";

import { ContactController } from "@/controllers/contact-controller";

const contactRoutes = Router();

const contactController = new ContactController();

contactRoutes.post("/", contactController.create);

export { contactRoutes };
