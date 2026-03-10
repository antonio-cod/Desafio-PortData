import "dotenv/config";
import { defineConfig } from "prisma";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  db: {
    provider: "mysql",
    url: process.env.DATABASE_URL,
    // shadowUrl: process.env.SHADOW_DATABASE_URL,
  },
});
