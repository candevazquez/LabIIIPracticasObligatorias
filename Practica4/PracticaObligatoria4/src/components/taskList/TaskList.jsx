const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ol>
      {tasks.map((task ,index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "lightgray" : "black",
          }}
        >
            <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => completeTask(index)} 
          />
          {task.text} 
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ol>
  );
};

export default TaskList;
