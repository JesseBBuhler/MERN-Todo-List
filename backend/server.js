const express = require("express");
const app = express();
const port = 4000;

//get all tasks
app.get("/", (req, res) => {
  res.send("Send all tasks");
});

//edit task
app.patch("/:id", (req, res) => {
  res.send(`Editing task number ${req.params.id}`);
});

//make new task
app.post("/", (req, res) => {
  res.send("Creating a new task");
});

//delete task
app.delete("/:id", (req, res) => {
  res.send(`Deleting task ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Listenting on port ${port}`);
});
