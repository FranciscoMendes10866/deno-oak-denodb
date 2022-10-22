import { Database, SQLite3Connector } from "https://deno.land/x/denodb/mod.ts";

import { Dog } from "../models/Dog.ts";

const connector = new SQLite3Connector({
  filepath: "./dev.sqlite",
});

export const db = new Database(connector);

db.link([Dog]);
