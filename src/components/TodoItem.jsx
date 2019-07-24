import React from 'react'

const TodoItem = ({removeFunc, todo, toggleChecked}) => {

  return (
    <li className="">
      <div className="view">
        <input 
          type="checkbox" 
          className="toggle" 
          id={todo.id} 
          checked={todo.completed}
          onClick ={() => toggleChecked(todo.id)}
        />
        <label htmlFor={todo.id}>
          {todo.title}
        </label>
        <button 
          type="button" 
          className="destroy" 
          onClick={removeFunc}
        />
      </div>
    </li>
  )
}

export default TodoItem