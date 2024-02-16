// set up
const TaskModel = require("../models/taskModel");
const mongoose = require("mongoose");

// get all tasks
const getTasks = async (req, res) => {
  const tasks = await TaskModel.find({});
  if (tasks) {
    res.status(200).json(tasks);
  } else {
    res.status(404).send("No tasks found");
  }
};

// create new task
const makeTask = async (req, res) => {
  const { task, completed } = req.body;

  let emptyFields = [];

  if (!task) {
    emptyFields.push("task");
  }
  if (typeof completed !== "boolean") {
    emptyFields.push("completed");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const newTask = await TaskModel.create({ task, completed });
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// check or uncheck task
const checkTask = (req, res) => {
  const { id } = req.params;
  res.send(`check task with id ${id}`);
};

// delete task
const deleteTask = (req, res) => {
  res.send(`delete task with id ${req.params.id}`);
};

module.exports = {
  getTasks,
  makeTask,
  checkTask,
  deleteTask,
};
