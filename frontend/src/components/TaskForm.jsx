const TaskForm = () => {
  const handleSubmit = () => {
    alert("submitted");
  };
  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input className="newTaskInput" type="text"></input>
      <button className="newTaskButton">Add New Task</button>
    </form>
  );
};

export default TaskForm;
