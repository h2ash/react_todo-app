import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ filteredTodos, toggleChecked }) => (
  <ul className="todo-list">
      {filteredTodos.map(todo => (
      <TodoItem 
        key={todo.id}
        todo={todo}
        toggleChecked={toggleChecked}
      />
    ))}
  </ul>

)

export default TodoList