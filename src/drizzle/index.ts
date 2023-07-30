import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import "dotenv/config";

import * as AuthSchema from "./schema/auth";

const databaseURL = process.env["DATABASE_URL"];
if (!databaseURL) throw new Error("Enviromental database Url not");

const connection = connect({
  url: databaseURL,
});

export const adapterDB = drizzle(connection);
export const db = drizzle(connection, {
  schema: AuthSchema,
});
