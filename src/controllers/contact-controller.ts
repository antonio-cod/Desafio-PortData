import { Request, Response } from "express";

class ContactController {
  create(request: Request, response: Response) {
    return response.json({ message: "Contact created successfully" });
  }
}

export { ContactController };
