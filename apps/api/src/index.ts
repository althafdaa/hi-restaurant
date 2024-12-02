import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: JSON.stringify(c.env), code: 200 });
});

export default app;
