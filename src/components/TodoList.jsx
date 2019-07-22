import React from 'react'

const TodoList = ({TodoItem}) => {
  return (
    <ul className="todo-list">
      {TodoItem}
    </ul>
  )
}

export default TodoList