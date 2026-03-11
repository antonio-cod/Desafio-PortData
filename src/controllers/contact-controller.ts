import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { z } from "zod";

class ContactController {
  async create(request: Request, response: Response) {
    const contactSchema = z.object({
      name: z
        .string()
        .trim()
        .min(3, { message: "O nome precisa ter pelo menos 3 caracteres" }),

      phone: z
        .string()
        .min(11, {
          message:
            "O telefone precisa ter no mínimo 11 caracteres exemplo: DDD + Numero",
        })
        .max(11, {
          message: "O telefone precisa ter 11 caracteres DDD + Numero",
        }),
    });

    const { name, phone } = contactSchema.parse(request.body);

    const contactWithSameName = await prisma.contact.findFirst({
      where: { name },
    });

    if (contactWithSameName) {
      throw new AppError("Já existe um contato com esse nome cadastrado!", 400);
    }

    const contactWithSamePhone = await prisma.contact.findFirst({
      where: { phone },
    });

    if (contactWithSamePhone) {
      throw new AppError(
        "Já existe um contato com esse telefone cadastrado!",
        400,
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        phone,
      },
    });

    return response.status(201).json(contact);
  }

  async list(request: Request, response: Response) {
    const contacts = await prisma.contact.findMany();
    return response.status(200).json(contacts);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const schema = z.object({
      name: z
        .string()
        .trim()
        .min(3, { message: "O nome precisa ter pelo menos 3 caracteres" }),
      phone: z
        .string()
        .min(11, {
          message:
            "O telefone precisa ter no mínimo 11 caracteres exemplo: DDD + Numero",
        })
        .max(11, {
          message: "O telefone precisa ter 11 caracteres DDD + Numero",
        }),
    });

    const { name, phone } = schema.parse(request.body);

    const existing = await prisma.contact.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError("Contato não encontrado", 404);
    }

    const contactWithSameName = await prisma.contact.findFirst({
      where: {
        name,
        NOT: { id },
      },
    });
    if (contactWithSameName) {
      throw new AppError("Já existe um contato com esse nome cadastrado!", 400);
    }

    const contactWithSamePhone = await prisma.contact.findFirst({
      where: {
        phone,
        NOT: { id },
      },
    });
    if (contactWithSamePhone) {
      throw new AppError(
        "Já existe um contato com esse telefone cadastrado!",
        400,
      );
    }

    const updated = await prisma.contact.update({
      where: { id },
      data: { name, phone },
    });

    return response.status(200).json(updated);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const existing = await prisma.contact.findUnique({ where: { id } });
    if (!existing) {
      throw new AppError("Contato não encontrado", 404);
    }

    await prisma.contact.delete({ where: { id } });

    return response
      .status(200)
      .json({ message: "Contato deletado com sucesso" });
  }
}

export { ContactController };
