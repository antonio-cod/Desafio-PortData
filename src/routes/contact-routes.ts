import { Router } from "express";

import { ContactController } from "@/controllers/contact-controller";

const contactRoutes = Router();

const contactController = new ContactController();

contactRoutes.post("/", contactController.create);
contactRoutes.get("/", contactController.list);
contactRoutes.patch("/:id", contactController.update);
contactRoutes.delete("/:id", contactController.delete);

export { contactRoutes };
