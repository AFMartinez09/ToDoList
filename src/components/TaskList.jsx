import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';
import { useState } from 'react';
import Task from './Task';

function TaskList() {

  const [tasks, setTasks] = useState([]); 

  const addTask = task => {
    // check if task is empty 
    if(task.text.trim()) {
      // delete unnecessary spaces
      task.text = task.text.trim();
      // the newest task comes first
      const upgradeTasks = [task, ...tasks];
      setTasks(upgradeTasks);
     }
  }
  const deleteTask = id => {
    const upgradeTasks = tasks.filter(task => task.id !== id);
    setTasks(upgradeTasks) 
  }

  const taskCompleted = id => {
    const upgradeTasks = tasks.map(task =>{
      if( task.id === id ) {
        // change the boolean true => false and viceverse 
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(upgradeTasks);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
          {
            // se mapea las props y luego pasen las taks (que son representadas como un objeto) en el array 
            tasks.map((task) =>
            <Task 
            // se coloca key y id porque la key no podemos acceder a ella y el id sí y si no colocamos key vamos a tener un error
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed} 
              deleteTask={deleteTask} 
              taskCompleted = {taskCompleted}/>
              )
          }
      </div>
    </>
  )
}

export default TaskList;


// lo que sucede es que se realiza el proceso de agregar tarea  y pasa por TaskList por medio de addTask y luego se lo envía a TaskForm quien la recibe y cuando pase por onSubmit la devuelve a addTask para que esta sea agregada 