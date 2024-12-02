import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: JSON.stringify(c.env) });
});

export default app;
