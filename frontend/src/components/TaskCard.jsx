const TaskCard = (props) => {
  const toggleTaskCompletion = async () => {
    const response = await fetch(`api/tasks/${props.data._id}`, {
      method: "PATCH",
    });
    const json = await response.json();
    alert(json);
  };

  const deleteTask = async () => {
    const response = await fetch(`api/tasks/${props.data._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    alert(json);
  };

  return (
    <div className="taskCard">
      <div
        onClick={toggleTaskCompletion}
        className={`checkbox ${props.data.completed ? "checked" : ""}`}
      >
        {props.data.completed ? <i class="fa-solid fa-check fa-xl"></i> : ""}
      </div>
      <h2>{props.data.task}</h2>
      <div onClick={deleteTask} className="deleteButton">
        <i class="fa-regular fa-trash-can fa-xl lower"></i>
      </div>
    </div>
  );
};

export default TaskCard;
