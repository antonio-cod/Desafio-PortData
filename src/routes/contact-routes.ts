import { Router } from "express";

import { ContactController } from "@/controllers/contact-controller";

const contactRoutes = Router();

const contactController = new ContactController();

contactRoutes.post("/create", contactController.create);
contactRoutes.get("/findAll", contactController.list);
contactRoutes.patch("/:id", contactController.update);
contactRoutes.delete("/:id", contactController.delete);

export { contactRoutes };
