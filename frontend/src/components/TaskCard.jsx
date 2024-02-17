const TaskCard = (props) => {
  console.log(props.data);
  return (
    <div className="task">
      <h1>{props.data.task}</h1>
    </div>
  );
};

export default TaskCard;
