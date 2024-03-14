//imports
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasksRoutes");
const userRoutes = require("./routes/userRoutes");

//declare constants
const uri = "mongodb://localhost:27017";
const dbName = "ToDoList";
const fullURI = uri + "/" + dbName;
const port = 2250;

//create app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(fullURI)
  .then(() => {
    console.log("connected to database");
    //start server
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database or launch server", error);
  });
