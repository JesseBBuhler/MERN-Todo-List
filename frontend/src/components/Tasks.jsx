import TaskCard from "./TaskCard";
import { useState, useEffect } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();
      if (response.ok) {
        setTasks(json);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <TaskCard key={task._id} data={task}></TaskCard>;
      })}
    </div>
  );
};

export default Tasks;
