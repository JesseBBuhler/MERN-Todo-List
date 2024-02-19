const TaskCard = (props) => {
  console.log(props.data.task, props.data.completed);
  return (
    <div className="taskCard">
      <h2>{props.data.task}</h2>
      <div className={`checkbox ${props.data.completed ? "checked" : ""}`}>
        {props.data.completed ? <i class="fa-solid fa-check fa-xl"></i> : ""}
      </div>
    </div>
  );
};

export default TaskCard;
