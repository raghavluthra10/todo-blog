import { useEffect, useState } from 'react';
import './App.css';
import Todos from './Todos';


function App() {

  const date = Date.now();

  const [ update, setUpdate ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ showEdit, setShowEdit ] = useState(false);
  const [ editTodoWithId, setEditTodoWithId ] = useState(null); 
 
  const addTodo = (e) => {
    e.preventDefault();

    {showEdit && setShowEdit(false)}

    if(showEdit) {
      setTodos(
        todos.map((todo) => {
          if(todo.id === editTodoWithId) {
            return {...todo, task: update}
          }
          return todo
        })
      )
    } else {
      setTodos([   ...todos, {
        task: update,
        id: date
      }])
    }
    
    
    setUpdate('')

  }

  const deleteTask = e => {
    const removeArr = [...todos].filter(todo => todo.id !== e)
    setTodos(removeArr)
  }



  const editTask = (task, id) => {
    setShowEdit(true)


    for(let i=0; i<todos.length; i++) {
      if(id === todos[i].id) {
        setUpdate(todos[i].task)
        setEditTodoWithId(todos[i].id)
        
      }
    }

    
  }
  

  return (
    <div className="App">
      <h1> Todo List </h1>

      <form>
        <input  
        type='text' 
        value={update} 
        onChange={(e) => setUpdate(e.target.value)} 
        placeholder='tasks' 
        />

        {showEdit ? (
          <input  
          type='submit' 
          value='Edit' 
          className='addtask_button' 
          onClick={addTodo}
          />
        ): (
            <input  
            type='submit' 
            value='ADD' 
            className='addtask_button' 
            onClick={addTodo}
            />
        )}
        
      </form>

      <div className='todo__list'>
        {todos.map((todo) =>(
          <Todos 
          id={todo.id} 
          task={todo.task} 
          deleteTask={(todo) => deleteTask(todo)}
          editTask={(task, id) => editTask(task, id)}
          />
  ))}
      </div>
    </div>
  );
}

export default App;
