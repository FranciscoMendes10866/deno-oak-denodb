import { Application } from "https://deno.land/x/oak/mod.ts";

import { router } from "./router/index.ts";
import { db } from "./db/connect.ts";

const port = 3000;
const app = new Application();

app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await db.sync();
await app.listen({ port });
