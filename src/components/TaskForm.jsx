import { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handlerChange = e => {
    setInput(e.target.value);  //<-- se obtiene el ultimo valor actualizado que realizó el usuario
  }

  const handlerSend = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
// se agrega la tarea a la lista de tareas
    props.onSubmit(newTask)
  }

  return (
    <form className="task-form"
    onSubmit={handlerSend}>
{/* cuando haya un cambio de envío (submit)*/}
      <input
      className="task-input"
      type="text"
      placeholder="Create New Task"
      name="texto" 
      onChange={handlerChange}/>
      <button className="task-button"> Add Task</button>
    </form>
    )
}

export default TaskForm;