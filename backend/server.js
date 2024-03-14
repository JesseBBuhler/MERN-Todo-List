//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasksRoutes");
const userRoutes = require("./routes/userRoutes");

//declare constants
const uri = process.env.MONGO_URI;
const dbName = process.env.DBNAME;
const fullURI = uri + "/" + dbName;
const port = process.env.PORT;

//create app hi
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
