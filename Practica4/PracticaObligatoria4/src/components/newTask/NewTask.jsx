import { useState } from 'react'

const NewTask = ({ addTask }) =>{

    const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    addTask(newTask);
    setNewTask('');
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value); 
  };


    return(
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="nueva tarea"
      />
      <button type="submit">agregar tarea</button>
    </form>
    );
}

export default NewTask;