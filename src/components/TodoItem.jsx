import React from 'react'

const TodoItem = ({ deleteItem, todo, toggleChecked }) => {

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id={todo.id}
          checked={todo.completed}
          onChange={() => toggleChecked(todo.id)}
        />
        <label htmlFor={todo.id}>
          {todo.title}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={() => deleteItem(todo.id)}
        />
      </div>
    </li>
  )
}

export default TodoItem