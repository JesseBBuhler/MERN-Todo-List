//imports
const express = require("express");
const {
  getTasks,
  makeTask,
  checkTask,
  deleteTask,
} = require("../controllers/tasksController");
const requireAuth = require("../middleware/requireAuth");

//set up
const router = express.Router();

//use requireAuth middleware to restrict routes to authorized users
router.use(requireAuth);

//GET all tasks
router.get("/", getTasks);

//POST new task
router.post("/", makeTask);

//PATCH task completion
router.patch("/:id", checkTask);

//DELETE task
router.delete("/:id", deleteTask);

module.exports = router;
