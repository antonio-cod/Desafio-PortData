import { app } from "@/app";

import request from "supertest";

describe("ContactController", () => {
  let contact_id: string;

  it("should create a new contact sucessfully", async () => {
    const response = await request(app).post("/contacts").send({
      name: "Test contact",
      phone: "65996208093",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test contact");

    contact_id = response.body.id;
  });

  it("should throw an error if contact with same name already exists", async () => {
    const response = await request(app).post("/contacts").send({
      name: "Test contact",
      phone: "65996208092",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      "Já existe um contato com esse nome cadastrado!",
    );
  });

  it("should throw an error if contact with same phone already exists", async () => {
    const response = await request(app).post("/contacts").send({
      name: "New test contact",
      phone: "65996208093",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      "Já existe um contato com esse telefone cadastrado!",
    );
  });

  it("should list all contacts", async () => {
    const response = await request(app).get("/contacts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should update a contact successfully", async () => {
    const response = await request(app).patch(`/contacts/${contact_id}`).send({
      name: "Updated Contact",
      phone: "65996208091",
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Updated Contact");
    expect(response.body.phone).toBe("65996208091");
  });

  it("should return error when updating non-existing contact", async () => {
    const response = await request(app).patch("/contacts/invalid-id").send({
      name: "Test Contact",
      phone: "65996208099",
    });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Contato não encontrado");
  });

  it("should delete a contact successfully", async () => {
    const response = await request(app).delete(`/contacts/${contact_id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Contato deletado com sucesso!");
  });
});
