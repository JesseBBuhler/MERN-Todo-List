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
const checkTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid task id" });
  }

  const foundTask = await TaskModel.findById(id);

  if (!foundTask) {
    return res.status(404).json({ error: "no task found" });
  }

  foundTask.completed = !foundTask.completed;
  await foundTask.save();

  res.status(200).json(foundTask);
};

// delete task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid task id" });
  }

  const taskToDelete = await TaskModel.findByIdAndDelete(id);

  if (!taskToDelete) {
    return res.status(404).json({ error: "no task found" });
  }

  res.status(200).json(taskToDelete);
};

module.exports = {
  getTasks,
  makeTask,
  checkTask,
  deleteTask,
};
