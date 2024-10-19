import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to Auth service");
});

export default app;
