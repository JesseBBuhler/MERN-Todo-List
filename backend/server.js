const express = require("express");
const app = express();
const taskRouts = require("./routes/tasksRoutes");

const port = 2250;

app.use("/api/tasks", taskRouts);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
