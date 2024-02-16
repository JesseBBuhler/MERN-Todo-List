// set up

// get all tasks
const getTasks = (req, res) => {
  res.send("getTasks");
};

// create new task
const makeTask = (req, res) => {
  res.send("makeTask");
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
