import { TasksContext } from "../context/TaskContext";
import { useTasksContext } from "../hooks/useTasksContext";
import { useState } from "react";

const TaskCard = (props) => {
  const { tasks, dispatch } = useTasksContext();
  const [loading, setLoading] = useState(false);

  const toggleTaskCompletion = async () => {
    setLoading(true);
    const response = await fetch(`api/tasks/${props.data._id}`, {
      method: "PATCH",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "TOGGLE_TASK", payload: json });
    }
    setLoading(false);
  };

  const deleteTask = async () => {
    const response = await fetch(`api/tasks/${props.data._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log("Before: " + tasks);
      dispatch({ type: "DELETE_TASK", payload: json });
      console.log("After: " + tasks);
    }
  };

  return (
    <div className="taskCard">
      <div
        onClick={toggleTaskCompletion}
        className={`checkbox 
        ${props.data.completed && "checked"} ${loading && "loading"}`}
      >
        {props.data.completed && (
          <i
            className={`fa-solid fa-check fa-xl ${loading && "invisible"}`}
          ></i>
        )}
        <div className={!loading && "invisible"}></div>
        <div className={!loading && "invisible"}></div>
      </div>
      <h2>{props.data.task}</h2>
      <div onClick={deleteTask} className="deleteButton">
        <i className="fa-regular fa-trash-can fa-xl lower"></i>
      </div>
    </div>
  );
};

export default TaskCard;
