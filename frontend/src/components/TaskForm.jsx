import { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const completed = false;
    const body = { task, completed };
    const response = await fetch("api/tasks", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTask("");
      console.log("new task added");
    }
  };
  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input
        className="newTaskInput"
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      ></input>
      <button className="newTaskButton">Add New Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
