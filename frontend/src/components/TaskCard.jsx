import { TasksContext } from "../context/TaskContext";
import { useTasksContext } from "../hooks/useTasksContext";

const TaskCard = (props) => {
  const { tasks, dispatch } = useTasksContext();
  const toggleTaskCompletion = async () => {
    const response = await fetch(`api/tasks/${props.data._id}`, {
      method: "PATCH",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "TOGGLE_TASK", payload: json });
    }
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
        className={`checkbox ${props.data.completed ? "checked" : ""}`}
      >
        {props.data.completed ? (
          <i className="fa-solid fa-check fa-xl"></i>
        ) : (
          ""
        )}
      </div>
      <h2>{props.data.task}</h2>
      <div onClick={deleteTask} className="deleteButton">
        <i className="fa-regular fa-trash-can fa-xl lower"></i>
      </div>
    </div>
  );
};

export default TaskCard;
