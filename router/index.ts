import { helpers, Router } from "https://deno.land/x/oak/mod.ts";

import { Dog } from "../models/Dog.ts"

export const router = new Router();

router.get("/dog", async (ctx) => {
  const result = await Dog.all()
  ctx.response.body = { result };
});

router.get("/dog/:id", async (ctx) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const result = await Dog.where("id", id).first();
  ctx.response.body = { result };
});

router.post("/dog", async (ctx) => {
  const { value } = ctx.request.body({ type: 'json' })
  const data = await value
  const result = await Dog.create(data)
  ctx.response.body = { result };
});

router.put("/dog/:id", async (ctx) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const { value } = ctx.request.body({ type: 'json' })
  const data = await value
  const result = await Dog.where("id", id).update(data)
  ctx.response.body = { result };
});

router.delete("/dog/:id", async (ctx) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const result = await Dog.deleteById(id)
  ctx.response.body = { result };
});
