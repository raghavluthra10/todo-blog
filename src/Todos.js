import React, { useState } from 'react';
import './Todos.css';

const Todos = (props) => {

  // state for editing a task
//   const [ edit, setEdit ] = useState('')
  
//   const [ show, setShow ] = useState(false);
    return (
        <div key={props.id}  className='todos' >
            <h2>
                {props.task}
            </h2>

            <button onClick={() => props.editTask(props.task, props.id)} >
                Edit
            </button>

            <button  onClick={() => props.deleteTask(props.id)} >
                Delete
            </button>
       </div> 
    )
}

export default Todos
