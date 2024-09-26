import { useState } from 'react'
import TaskList from './components/taskList/TaskList';
import NewTask from './components/newTask/NewTask';


const App = () => {
 const[tasks, setTasks] = useState([]);

 //agregar tarea
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };
  
 //completar tarea
  const completeTask = (index) => {
    setTasks(tasks.map((task,i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // borrar tarea
  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
  };

  return (
    <div className="App">
    <h1>Manejo de tareas personales</h1>
    <NewTask addTask={addTask} />
    <TaskList
      tasks={tasks}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  </div>
  )
}

export default App

// Debemos crear una aplicación de manejo de tareas personales.
// La app nos debe permitir:
// Agregar una nueva tarea a la lista. 
// Marcar una tarea como completada e indicarlo de alguna manera
//  (tachando el texto o cambiando el color del mismo (gris claro, por ejemplo)).
// Borrar una tarea de la lista.

// Sugerencias
// Crear el estado de las tareas en App.jsx para que
// se facilite el pasaje entre componentes. 
// Crear un componente tipo lista que nos muestre todas las tareas de una lista. 
// Crear un componente que nos permite agregar una nueva tarea.