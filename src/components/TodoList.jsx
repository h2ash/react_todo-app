import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ filteredTodos, toggleChecked }) => (
  <ul className="todo-list">
      {filteredTodos.map(todo => (
      <TodoItem 
        todo={todo}
        toggleChecked={toggleChecked}
      />
    ))}
  </ul>

)

export default TodoList