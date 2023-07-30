import type { Config } from "drizzle-kit";
import "dotenv/config";

const databaseURL = process.env["DATABASE_URL"];
if (!databaseURL) throw new Error("Enviromental database Url not");

const config: Config = {
  schema: ["./src/drizzle/schema/*"],
  out: "./src/drizzle/migrations",
  driver: "mysql2",
  dbCredentials: {
    connectionString: databaseURL,
  },
};

export default config;
