import { z } from "zod";

const envShema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().url(),
});

export const env = envShema.parse(process.env);
