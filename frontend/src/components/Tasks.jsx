import TaskCard from "./TaskCard";
import { useEffect } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const Tasks = () => {
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="tasks">
      {tasks &&
        tasks.map((task) => {
          return <TaskCard key={task._id} data={task}></TaskCard>;
        })}
    </div>
  );
};

export default Tasks;
