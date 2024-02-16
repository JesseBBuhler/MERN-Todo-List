//imports
const express = require("express");
const {
  getTasks,
  makeTask,
  checkTask,
  deleteTask,
} = require("../controllers/tasksController");

//set up
const router = express.Router();

//GET all tasks
router.get("/", getTasks);

//POST new task
router.post("/", makeTask);

//PATCH task completion
router.patch("/:id", checkTask);

//DELETE task
router.delete("/:id", deleteTask);

module.exports = router;
