import React, { useState } from 'react';
import './Todos.css';

const Todos = (props) => {


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
