const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/:id", (req, res) => {
  res.send(`Hello ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Listenting on port ${port}`);
});
