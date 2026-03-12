import { z } from "zod";

const envShema = z.object({
  NODE_ENV: z.enum(["dev", "prod", "test"]).default("dev"),
  DATABASE_URL: z.string().url(),
});

export const env = envShema.parse(process.env);
